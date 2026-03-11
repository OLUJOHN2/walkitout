import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import logo from "../assets/logo.png";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      {/* Center: Search */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Enter your search shoes."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>

      {/* Right: Wishlist / Profile */}
      <div className="nav-right">
        <FiHeart className="nav-icon" />
        <AiOutlineUserAdd className="nav-icon" />
      </div>
    </nav>
  );
};

export default Nav;
