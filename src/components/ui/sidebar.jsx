import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./sheet";

export function Sidebar({
  side = "left",
  isCollapsible = false,
  toggleSidebar,
  sidebarWidthDesktop = "256px",
  sidebarWidthMobile = "288px",
  mobileBreakpoint = 768,
  className,
  children,
  ...props
}) {
  const isMobile = useIsMobile(mobileBreakpoint);

  if (isMobile) {
    return (
      <Sheet open={isCollapsible} onOpenChange={toggleSidebar} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-background p-0 text-foreground [&>button]:hidden"
          style={{
            "--sidebar-width": sidebarWidthMobile,
          }}
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group hidden bg-background md:block"
      data-collapsible={isCollapsible}
      data-side={side}
      data-slot="sidebar"
      style={{
        "--sidebar-width": sidebarWidthDesktop,
      }}
    >
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=true]:w-0",
          "group-data-[side=right]:rotate-180",
        )}
      />

      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-dvh w-(--sidebar-width) border-foreground/10 transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 border-r group-data-[collapsible=true]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 border-l group-data-[collapsible=true]:right-[calc(var(--sidebar-width)*-1)]",
          className,
        )}
        {...props}
      >
        <div
          data-slot="sidebar-inner"
          className="flex size-full flex-col bg-background"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
