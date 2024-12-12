import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  LogoutContainer,
} from "./Sidebar.styles";
import Button from "../button/Button";

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

  const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch logout 넣을 예정
    navigate("lougout");
  };

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
      <LogoutContainer>
        <Button text="Logout" onClick={handleLogout} />
      </LogoutContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
