// Header.js
import React from 'react';
import Logo from './Logo.jsx';
import LocationSelector from '../HomePages/LocationSelector.jsx';
import NavLinks from './NavLinks.jsx';
import LoginButton from './LoginButton.jsx';


const Header = () => {
  return (
    <div className="flex fixed w-[100%] top-[0] z-999 bg-[white] items-center justify-between pr-8 pl-8 pb-[1.2rem] pt-[1.2rem] shadow-lg">
      <Logo />
      <NavLinks />
      <LoginButton />
    </div>
  );
};

export default Header;
