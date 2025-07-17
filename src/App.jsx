import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/ui/layout";
import HomePage from "./pages/home-page";
import PageNotFound from "./pages/not-found-page";
import OrderListPage from "./pages/order-list-page";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/order-list" element={<OrderListPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
