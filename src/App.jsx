import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/ui/layout";
import HomePage from "./pages/home-page";
import PageNotFound from "./pages/not-found-page";
import OrderListPage from "./pages/order-list-page";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "order-list", Component: OrderListPage },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
