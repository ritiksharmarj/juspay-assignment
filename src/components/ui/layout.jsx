import * as React from "react";
import { Outlet } from "react-router";
import { Header } from "./header";
import { SidebarLeft } from "./sidebar-left";
import { SidebarRight } from "./sidebar-right";

export function Layout() {
  const [isSidebarLeftOpen, setIsSidebarLeftOpen] = React.useState(false);
  const [isSidebarRightOpen, setIsSidebarRightOpen] = React.useState(false);

  const toggleSidebarLeft = React.useCallback(
    () => setIsSidebarLeftOpen((prevState) => !prevState),
    [],
  );

  const toggleSidebarRight = React.useCallback(
    () => setIsSidebarRightOpen((prevState) => !prevState),
    [],
  );

  return (
    <div className="flex min-h-dvh w-full">
      <SidebarLeft
        isSidebarLeftOpen={isSidebarLeftOpen}
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
        isSidebarRightOpen={isSidebarRightOpen}
        toggleSidebar={toggleSidebarRight}
      />
    </div>
  );
}
