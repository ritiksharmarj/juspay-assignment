import {
  BookOpenIcon,
  ChartPieSliceIcon,
  ChatsTeardropIcon,
  FolderNotchIcon,
  IdentificationBadgeIcon,
  IdentificationCardIcon,
  NotebookIcon,
  ShoppingBagOpenIcon,
  UsersThreeIcon,
} from "@/components/icons";

export const TABS_DATA = [
  {
    title: "Favorites",
    value: "favorites",
    content: [
      { title: "Overview", route: "/overview" },
      { title: "Projects", route: "/projects" },
    ],
  },
  {
    title: "Recently",
    value: "recently",
    content: [
      { title: "eCommerce", route: "/order-list" },
      { title: "Documents", route: "/documents" },
    ],
  },
];

export const NAV_DATA = [
  {
    title: "Dashboards",
    navItems: [
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
            title: "Order List",
            route: "/order-list",
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
    ],
  },
  {
    title: "Pages",
    navItems: [
      {
        title: "User Profile",
        route: "",
        icon: IdentificationBadgeIcon,
        subMenu: [
          {
            title: "Overview",
            route: "/overview",
          },
          {
            title: "Projects",
            route: "/projects",
          },
          {
            title: "Campaigns",
            route: "/campaigns",
          },
          {
            title: "Documents",
            route: "/documents",
          },
          {
            title: "Followers",
            route: "/followers",
          },
        ],
      },
      {
        title: "Account",
        route: "",
        icon: IdentificationCardIcon,
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
        title: "Corporate",
        route: "",
        icon: UsersThreeIcon,
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
        title: "Blog",
        route: "",
        icon: NotebookIcon,
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
        title: "Social",
        route: "",
        icon: ChatsTeardropIcon,
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
    ],
  },
];
