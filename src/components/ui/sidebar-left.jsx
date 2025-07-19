import * as React from "react";
import { NavLink, useLocation } from "react-router";
import ByeWind from "@/assets/images/bye-wind.png";
import { TransitionPanel } from "@/components/core/transition-panel";
import { useIsMobile } from "@/hooks/use-mobile";
import { NAV_DATA, TABS_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowLineRightIcon } from "../icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  useCollapsible,
} from "./collapsible";
import { Sidebar } from "./sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

function SidebarSubMenuItem({ subNavItem, toggleSidebar, ...props }) {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const isActive = pathname === subNavItem.route;

  return (
    <NavLink
      to={subNavItem.route}
      onClick={isMobile && toggleSidebar}
      className={cn(
        "relative flex h-7 cursor-pointer items-center gap-1 whitespace-nowrap rounded-lg py-1 pr-2 pl-13 text-sm transition-colors hover:bg-foreground/5",
        isActive && "bg-foreground/5",
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute left-0 h-4 w-1 rounded-full bg-primary-brand opacity-0 transition-opacity",
          isActive && "opacity-100",
        )}
      />

      {subNavItem.title}
    </NavLink>
  );
}

function SidebarItem({
  navItem,
  isCollapsible = false,
  isOpen = false,
  toggleSidebar,
  ...props
}) {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const Comp = isCollapsible ? "div" : NavLink;
  const isActive = pathname === navItem.route;

  if (!isCollapsible) {
    props.to = navItem.route;
    props.onClick = isMobile && toggleSidebar;
  }

  return (
    <Comp
      className={cn(
        "relative flex h-7 cursor-pointer items-center gap-1 rounded-lg px-2 py-1 transition-colors hover:bg-foreground/5",
        isActive && !isCollapsible && "bg-foreground/5",
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute left-0 h-4 w-1 rounded-full bg-primary-brand opacity-0 transition-opacity",
          isActive && !isCollapsible && "opacity-100",
        )}
      />

      <ArrowLineRightIcon
        className={cn(
          "size-4 shrink-0 text-foreground/20 transition-transform",
          !isCollapsible && "opacity-0",
          isOpen && "rotate-90",
        )}
      />

      <div className="flex items-center gap-1 whitespace-nowrap">
        <navItem.icon className="size-5 shrink-0" />
        <span className="text-sm">{navItem.title}</span>
      </div>
    </Comp>
  );
}

function CollapsibleSidebarItem({ navItem, toggleSidebar }) {
  const { isOpen } = useCollapsible();

  return (
    <>
      <CollapsibleTrigger asChild>
        <SidebarItem navItem={navItem} isCollapsible isOpen={isOpen} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col gap-1">
          {navItem.subMenu.map((subNavItem) => (
            <SidebarSubMenuItem
              key={subNavItem.title}
              subNavItem={subNavItem}
              toggleSidebar={toggleSidebar}
            />
          ))}
        </div>
      </CollapsibleContent>
    </>
  );
}

export function SidebarLeft({ isCollapsible, toggleSidebar }) {
  const { pathname } = useLocation();
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <Sidebar
      isCollapsible={isCollapsible}
      sidebarWidthDesktop="212px"
      toggleSidebar={toggleSidebar}
    >
      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="px-4 pt-5">
          <div className="flex h-8 cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg p-1 text-sm transition-colors hover:bg-foreground/5">
            <img
              src={ByeWind}
              alt="avatar"
              className="size-6 shrink-0 rounded-full"
            />
            ByeWind
          </div>
        </div>

        <div className="px-4">
          <Tabs
            defaultValue={TABS_DATA[0].value}
            onValueChange={(value) =>
              setActiveTabIndex(TABS_DATA.findIndex((t) => t.value === value))
            }
          >
            <TabsList>
              {TABS_DATA.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TransitionPanel
              activeIndex={activeTabIndex}
              transition={{ duration: 0.2, ease: "easeOut" }}
              variants={{
                enter: { opacity: 0, y: 10, filter: "blur(2px)" },
                center: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: { opacity: 0, y: -10, filter: "blur(2px)" },
              }}
              className="overflow-hidden"
            >
              {TABS_DATA.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="flex flex-col gap-1 text-sm"
                >
                  {tab.content.map((item) => (
                    <div
                      key={item.title}
                      className="flex h-7 items-center whitespace-nowrap rounded-lg py-1 pr-2 pl-[13px] hover:bg-foreground/5"
                    >
                      <div className="mr-[9px] size-1.5 shrink-0 rounded-full bg-foreground/20" />
                      {item.title}
                    </div>
                  ))}
                </TabsContent>
              ))}
            </TransitionPanel>
          </Tabs>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 pb-5">
          {NAV_DATA.map((nav) => (
            <div key={nav.title} className="flex flex-col gap-1">
              <div className="flex h-7 items-center px-3 py-1 text-foreground/40 text-sm">
                {nav.title}
              </div>

              {nav.navItems.map((item) => {
                const isSubMenuExists = !!item.subMenu && !!item.subMenu.length;

                if (isSubMenuExists) {
                  const isSubMenuActive = item.subMenu.some(
                    (subItem) => subItem.route === pathname,
                  );

                  return (
                    <Collapsible key={item.title} defaultOpen={isSubMenuActive}>
                      <CollapsibleSidebarItem
                        navItem={item}
                        toggleSidebar={toggleSidebar}
                      />
                    </Collapsible>
                  );
                }

                return (
                  <SidebarItem
                    key={item.title}
                    navItem={item}
                    toggleSidebar={toggleSidebar}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Sidebar>
  );
}
