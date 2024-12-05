import { Link, useLocation } from "react-router-dom";
import {
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  LogoutContainer,
} from "./Sidebar.styles";

interface Menu {
  title: string;
  path: string;
}

const menus: Menu[] = [
  { title: "Main", path: "/admin/main" },
  { title: "PageOne", path: "/admin/page-one" },
  { title: "PageTwo", path: "/admin/page-two" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      <SidebarList>
        {menus.map(({ title, path }) => {
          const isActive = location.pathname === path;
          return (
            <SidebarListItem key={path} isActive={isActive}>
              <Link to={path}>{title}</Link>
            </SidebarListItem>
          );
        })}
      </SidebarList>
      <LogoutContainer></LogoutContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
