import { Outlet, Route, Routes } from "react-router";
import Welcome from "../pages/Welcome";
import AppShell from "./AppShell";
import Page1 from "../pages/Page1";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <AppShell>
            <Outlet />
          </AppShell>
        }
      >
        <Route path="/" element={<Welcome />} />
        <Route path="/page1" element={<Page1 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
