import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Link href="/">
                <a >
                  <Image src="/images/shazdayLogo.jpg"
                    style={{ borderRadius: 100 }}
                    width={70} height={70}
                    alt="logo"
                  />
                </a> 
              </Link>
              <span>&nbsp;Shazday</span>-e-Commerce</h6>
            <p>
              House of Dry Fruits caters to individuals of all ages, offering a wide range of delectable and nutritious dry fruits.
            </p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Bacome a buyer</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">shazday@gmail.com</a></li>
              <li><a href="#">Hotline: +92-343-349-6008</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY gaama.codes - © 2023. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer