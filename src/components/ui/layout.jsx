import { Outlet } from "react-router";
import { SidebarLeft } from "./sidebar-left";
import { SidebarRight } from "./sidebar-right";

export function Layout() {
  return (
    <div className="grid min-h-dvh grid-cols-1 md:grid-cols-[212px_minmax(200px,_1fr)_280px]">
      <SidebarLeft />

      <main className="relative flex w-full flex-1 flex-col">
        <Outlet />
      </main>

      <SidebarRight />
    </div>
  );
}
