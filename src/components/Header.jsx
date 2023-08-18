import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { header } from '../data/data';
import Nav from './Nav';
import MobileNav from './MobileNav';

function Header() {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { logo, btnText } = header;

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 60 ? setIsScrolled(true) : setIsScrolled(false)
    );
  });

  return (
    <header
      className={`${
        isScrolled ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'
      } py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/#" data-aos="fade-down" data-aos-delay="1000">
          <img src={logo} alt="Header Logo" />
        </a>
        <div
          className="hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="1200"
        >
          <Nav />
        </div>
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          data-aos="fade-down"
          data-aos-delay="1400"
          onClick={() =>
            (window.location.href =
              'https://api.whatsapp.com/send?phone=6285718010129')
          }
        >
          {btnText}
        </button>
        <button
          className="lg:hidden"
          onClick={() => setIsMobileNav(!isMobileNav)}
        >
          {isMobileNav ? (
            <HiOutlineX className="text-3xl text-accent" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-accent" />
          )}
        </button>
      </div>

      <div
        className={`${
          isMobileNav ? 'left-0' : '-left-full'
        } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
      >
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
