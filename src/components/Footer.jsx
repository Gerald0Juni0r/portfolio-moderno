// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='main-footer'>
      <div className='container'>
        <p>© {currentYear} Geraldo.dev - Feito com ❤️ e muito café</p>
      </div>
    </footer>
  );
};

export default Footer;
