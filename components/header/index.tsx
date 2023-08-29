import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { RootState } from 'store';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ['/'];

  const [onTop, setOnTop] = useState((!arrayPaths.includes(router.pathname) || isErrorPage) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container" >
        <Link href="/">
          <a className='navIcons'>
            <Image src="/images/shazdayLogo.jpg"
              style={{ borderRadius: 100 }}
              width={70} height={70}
              alt="logo"
            />
          </a>
        </Link>
        <div className='nav-items-container'>
          <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
            <Link href="/">
              <a style={{ color: isActive('/') ? '#c38f00' : 'inherit' }}>HOME</a>
            </Link>
            {/* <Link href="/products"> */}
            <Link href="/">

              <a style={{ color: isActive('/products') ? '#c38f00' : 'inherit' }}>PRODUCTS</a>
            </Link>
            <Link href="/">
            {/* <Link href="/Blogs"> */}
              <a style={{ color: isActive('/Blogs') ? '#c38f00' : 'inherit' }}>BLOGS</a>
            </Link>
            <Link href="/About">
              <a style={{ color: isActive('/About') ? '#c38f00' : 'inherit' }}>ABOUT</a>
            </Link>
            <Link href="/Contact">
              <a style={{ color: isActive('/Contact') ? '#c38f00' : 'inherit' }}>CONTACT</a>
            </Link>
            <button className="site-nav__btn"><p>Account</p></button>
          </nav>

          <div className="site-header__actions">
            <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
              <form className={`search-form`}>
                <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
                <input type="text" name="search" placeholder="Enter the product you are looking for" />
              </form>
              <i onClick={() => setSearchOpen(!searchOpen)} className="icon-search"></i>
            </button>
            {/* <Link href="/cart"> */}
            <Link href="/">

              <button className="btn-cart">
                <i className="icon-cart"></i>
                {cartItems.length > 0 &&
                  <span className="btn-cart__count">{cartItems.length}</span>
                }
              </button>
            </Link>
            {/* <Link href="/login"> */}
            <Link href="/">
              <button className="site-header__btn-avatar"><i className="icon-avatar"></i></button>
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="site-header__btn-menu">
              <i className="btn-hamburger"><span></span></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
};


export default Header;
