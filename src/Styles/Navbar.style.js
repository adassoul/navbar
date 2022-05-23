import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavImg = styled.img`
  width: 100px;
  height: 100px;
  display: flex;
`;

export const Navbar = styled.div`
  height: 80px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
`;

export const NavbarLeft = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const NavbarRight = styled.div`
  flex: 30%;
`;

export const NavbarInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarExtended = styled.div``;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px;
  text-align: center;
`;
