import "../Footer/index.scss"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <div>

      <footer id="footer">
        <div className="container">
          <div className="footer">
          <div className="footertop">
          <nav>
              <ul><img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo2_footer.png" alt="" />
              <li><p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p></li></ul>
              <ul>Quick Links
                <li>About</li>
                <li>Offers & Discounts</li>
                <li>Get Coupon</li>
                <li>Contact Us</li>
              </ul>
              <ul>New Products
                <li>Woman Cloth</li>
                <li>Fashion Accessories</li>
                <li>Man Accessories</li>
                <li>Rubber made Toys</li>
              </ul>
              <ul>Support
                <li>Frequently Asked Questions</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </nav>
          </div>
          <div className="footerbottom">
            <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
            <div className="icons">
           <div className="icon1"> <FaTwitter  className="nbir"/></div>
<div className="icon2">            <FaFacebook  className="nbir"/>
</div>           
<div className="icon3"> <TfiWorld className="nbir" /></div>



            </div>


          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer