import "../Header/index.scss";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="headerleft">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png"
                alt=""
              />
            </div>
            <div className="headermiddle">
              <nav>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/category"}>Category</Link>
                  </li>
                  <li>
                    <Link to={"/latest"}>Latest</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/AddProduct"}>AddProduct</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="headerright">
              <div className="input">
                <input type="text" placeholder="Seacrh products" />
              </div>
              <div className="icons">
                <div className="icon1">
                  <IoMdSearch className="ic1" />
                </div>
                <div className="icon2">
                <CiHeart className="ic2" />

                </div>
                <div className="icon3">
                <SlBasket className="ic3" />

                </div>
              </div>
              <div className="button">
                <button>Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
