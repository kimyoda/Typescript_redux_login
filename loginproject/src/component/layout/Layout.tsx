import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./Layout.styles";
import Sidebar from "./Sidebar";

const Layout = () => {
  const isLoggedIn = true;

  return (
    <LayoutContainer isLoggedIn={isLoggedIn}>
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
