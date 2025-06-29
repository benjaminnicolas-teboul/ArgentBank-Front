import Logo from "../Logo/Logo";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import LoginNavItem from "../LoginNavItem/LoginNavItem";

const Header = () => {
    
  return (
    <header className="main-nav">
      <Link to="/">
        <Logo className="main-nav-logo" />
      </Link>
      <LoginNavItem firstName="Thony"/>
    </header>
  );
};

export default Header;
