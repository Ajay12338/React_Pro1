//You need to import image like this
import logo from "../utils/app_logo_1.png";

const Header = () => {
  return (
    <div id="header">
      <img src={logo} alt="app_logo" id="app_logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
