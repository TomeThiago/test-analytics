import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export function DashboardLayout() {
  return (
    <div className="container">
      <div className="content">
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </div>
  );
}
