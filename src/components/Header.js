import logo from "../../public/images/foodAppLogo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Orders</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
