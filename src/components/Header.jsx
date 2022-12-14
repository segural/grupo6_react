import React from 'react';
import Logo from '../assets/logo2.png';
import '../sass/Header.scss';

const Header = () => {
  return (
    <div className="header">
            <img src={Logo} alt="" className="logo" />
    </div>
  )
}

export {Header}