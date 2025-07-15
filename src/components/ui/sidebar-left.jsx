import { NavLink, useLocation } from "react-router";
import ByeWind from "@/assets/images/bye-wind.png";
import { cn } from "@/lib/utils";
import {
  ArrowLineRightIcon,
  BookOpenIcon,
  ChartPieSliceIcon,
  FolderNotchIcon,
  ShoppingBagOpenIcon,
} from "../icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  useCollapsible,
} from "./collapsible";

const navItems = [
  {
    title: "Default",
    route: "/",
    icon: ChartPieSliceIcon,
    subMenu: [],
  },
  {
    title: "eCommerce",
    route: "",
    icon: ShoppingBagOpenIcon,
    subMenu: [
      {
        title: "Item One",
        route: "/item-one",
      },
      {
        title: "Item Two",
        route: "/item-two",
      },
      {
        title: "Item Three",
        route: "/item-three",
      },
    ],
  },
  {
    title: "Projects",
    route: "",
    icon: FolderNotchIcon,
    subMenu: [
      {
        title: "Item One",
        route: "/item-one",
      },
      {
        title: "Item Two",
        route: "/item-two",
      },
      {
        title: "Item Three",
        route: "/item-three",
      },
    ],
  },
  {
    title: "Online Courses",
    route: "",
    icon: BookOpenIcon,
    subMenu: [
      {
        title: "Item One",
        route: "/item-one",
      },
      {
        title: "Item Two",
        route: "/item-two",
      },
      {
        title: "Item Three",
        route: "/item-three",
      },
    ],
  },
];

function SidebarSubMenuItem({ subNavItem, ...props }) {
  return (
    <NavLink
      to={subNavItem.route}
      className={cn(
        "relative flex h-7 cursor-pointer items-center gap-1 rounded-lg py-1 pr-2 pl-13 text-sm transition-colors hover:bg-foreground/5",
      )}
      {...props}
    >
      {subNavItem.title}
    </NavLink>
  );
}

function SidebarItem({
  navItem,
  isCollapsible = false,
  isOpen = false,
  ...props
}) {
  const pathname = useLocation().pathname;

  const Comp = isCollapsible ? "div" : NavLink;
  const isActive = pathname === navItem.route;

  if (!isCollapsible) {
    props.to = navItem.route;
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

      <div className="flex items-center gap-1">
        <navItem.icon className="size-5 shrink-0" />
        <span className="text-sm">{navItem.title}</span>
      </div>
    </Comp>
  );
}

function CollapsibleSidebarItem({ navItem }) {
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
            />
          ))}
        </div>
      </CollapsibleContent>
    </>
  );
}

export function SidebarLeft() {
  return (
    <div className="relative flex size-full flex-col gap-4 py-5">
      <div className="px-4">
        <div className="flex h-8 cursor-pointer items-center gap-2 rounded-lg p-1 text-sm transition-colors hover:bg-foreground/5">
          <img src={ByeWind} alt="avatar" className="size-6 rounded-full" />
          ByeWind
        </div>
      </div>

      <div></div>

      <div className="overflow-y-auto px-4">
        <div className="flex flex-col gap-1">
          <div className="flex h-7 items-center px-3 py-1 text-foreground/40 text-sm">
            Dashboards
          </div>

          {navItems.map((item) => {
            const isSubMenuExists = !!item.subMenu && !!item.subMenu.length;

            if (isSubMenuExists) {
              return (
                <Collapsible key={item.title}>
                  <CollapsibleSidebarItem navItem={item} />
                </Collapsible>
              );
            }

            return <SidebarItem key={item.title} navItem={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
