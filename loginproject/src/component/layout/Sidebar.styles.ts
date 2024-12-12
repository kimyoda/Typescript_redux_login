import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 200px;
  heigth 100%;

  background-color: #f5f5f5;
`;

interface SidebarListItemProps {
  isActive: boolean;
}

export const SidebarList = styled.ul``;

export const SidebarListItem = styled.li<SidebarListItemProps>`
  background-color: ${(props) => {
    return props.isActive ? "#e0e0e0" : "#f5f5f5";
  }};

  a {
    text-decoration: none;
    color: black;
  }
`;

export const LogoutContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
