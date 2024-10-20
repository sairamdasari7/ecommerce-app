import { GoPerson } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { PiPlantFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="top-nav">
        <p className="top-nav-text">Free Shipping on orders above 999/-</p>
        <p className="contact-no">Call us on: +91 98786 42561</p>
      </div>
      <div className="navbar">
        <div className="logo-section">
          <img
            src="https://res.cloudinary.com/dktojjeva/image/upload/v1729254641/image_55_oj6djw.png"
            alt="page-logo"
            className="page-logo"
          />
          <h1 className="heading">Chaperone</h1>
        </div>
        <ul className="menu-list">
          <li className="menu-item">Home</li>
          <li className="menu-item">Plants & Pots</li>
          <li className="menu-item">Tools</li>
          <li className="menu-item">Our Services</li>
          <li className="menu-item">Blog</li>
          <li className="menu-item">Our Story</li>
          <li className="menu-item">FAQs</li>
        </ul>
        <div className="profile-cart">
          <div className="pc-card">
            <GoPerson size={20} color="#000000"/>
            <p className="pc-text">My Profile</p>
          </div>
          <div className="pc-card">
            <BsCart2 size={20} color="#000000"/>
            <p className="pc-text">Cart</p>
          </div>
        </div>
      </div>
      <div className="search-section">
        <div>
          <CiSearch size={20} color="#838383"/>
          <input
            type="search"
            className="input-box"
            placeholder="Search Plant"
          />
          <PiPlantFill size={20} color="#838383"/>
          <hr className="styling-line"/>
        </div>
      </div>
    </div>
  );
};

export default Header;