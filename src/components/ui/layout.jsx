import { Outlet } from "react-router";
import { Header } from "./header";
import { SidebarLeft } from "./sidebar-left";
import { SidebarRight } from "./sidebar-right";

export function Layout() {
  return (
    <div className="grid h-dvh grid-cols-[212px_minmax(200px,_1fr)_280px]">
      <SidebarLeft />

      <main className="relative flex w-full flex-1 flex-col">
        <Header />
        <Outlet />
      </main>

      <SidebarRight />
    </div>
  );
}
