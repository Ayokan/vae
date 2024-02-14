// Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 text-center">
      
      <h1 className="text-2xl font-bold">Mi Amor <FontAwesomeIcon icon={faHeart} className="text-red-500" /></h1>
    </header>
  );
};

export default Header;

