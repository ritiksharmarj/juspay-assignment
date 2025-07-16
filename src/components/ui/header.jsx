import {
  BellIcon,
  ClockCounterClockwiseIcon,
  SearchIcon,
  SidebarIcon,
  StarIcon,
  SunIcon,
} from "../icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";
import { Button } from "./button";
import { Input } from "./input";

export function Header({ toggleSidebarLeft, toggleSidebarRight }) {
  return (
    <header className="sticky top-0 flex h-17 shrink-0 items-center border-foreground/10 border-b px-7">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleSidebarLeft}>
            <SidebarIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <StarIcon />
          </Button>
        </div>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Default</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex grow items-center justify-end gap-5">
        <Input
          type="text"
          placeholder="Search"
          prefix={<SearchIcon />}
          suffix={"⌘/"}
          className="w-[160px]"
        />

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <SunIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <ClockCounterClockwiseIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <BellIcon />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleSidebarRight}>
            <SidebarIcon />
          </Button>
        </div>
      </div>
    </header>
  );
}
