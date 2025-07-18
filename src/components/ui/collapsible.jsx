import * as React from "react";

const CollapsibleContext = React.createContext();

function useCollapsible() {
  const context = React.useContext(CollapsibleContext);

  if (!context) {
    throw new Error("useCollapsible must be used within a Collapsible.");
  }

  return context;
}

function Collapsible({ children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggle }}>
      {children}
    </CollapsibleContext.Provider>
  );
}

function CollapsibleTrigger({ children, asChild }) {
  const { toggle } = useCollapsible();

  if (asChild) {
    return React.cloneElement(children, { onClick: toggle });
  }

  return (
    <button type="button" onClick={toggle}>
      {children}
    </button>
  );
}

function CollapsibleContent({ children }) {
  const { isOpen } = useCollapsible();
  const contentRef = React.useRef(null);

  return (
    <div
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent, useCollapsible };
