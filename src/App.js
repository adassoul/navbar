import "./styles.css";
import {
  Navbar,
  NavbarInner,
  NavbarLeft,
  NavbarRight,
  NavbarExtended,
  NavbarLink,
  NavImg
} from "./Styles/Navbar.style";

import { LogoImg } from "./Assets/NavbarImg.png";

export default function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarInner>
          <NavbarLeft>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/contact">Contact Us</NavbarLink>
            <NavbarLink to="/about">About Us</NavbarLink>
          </NavbarLeft>
          <NavbarRight>
            <NavImg src={LogoImg} />
          </NavbarRight>
        </NavbarInner>
        <NavbarExtended></NavbarExtended>
      </Navbar>
    </div>
  );
}
