// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='main-footer'>
      <div className='container'>
        <p>© {currentYear} Geraldo Júnior · Feito com React e muito café</p>
      </div>
    </footer>
  );
};

export default Footer;
