import * as React from "react";
import { Outlet } from "react-router";
import { Header } from "./header";
import { SidebarLeft } from "./sidebar-left";
import { SidebarRight } from "./sidebar-right";

export function Layout() {
  const [collapsedLeft, setCollapsedLeft] = React.useState(false);
  const [collapsedRight, setCollapsedRight] = React.useState(false);

  const toggleSidebarLeft = React.useCallback(
    () => setCollapsedLeft((prevState) => !prevState),
    [],
  );

  const toggleSidebarRight = React.useCallback(
    () => setCollapsedRight((prevState) => !prevState),
    [],
  );

  return (
    <div className="flex min-h-dvh w-full">
      <SidebarLeft
        isSidebarLeftOpen={collapsedLeft}
        toggleSidebar={toggleSidebarLeft}
      />

      <main className="relative flex h-dvh w-full flex-1 flex-col overflow-y-auto">
        <Header
          toggleSidebarLeft={toggleSidebarLeft}
          toggleSidebarRight={toggleSidebarRight}
        />
        <Outlet />
      </main>

      <SidebarRight
        isSidebarRightOpen={collapsedRight}
        toggleSidebar={toggleSidebarRight}
      />
    </div>
  );
}
