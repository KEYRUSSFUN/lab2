import React from 'react';

function Navigation() {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <a href="/" style={{ margin: '0 10px' }}>Домой</a>
      <a href="/about" style={{ margin: '0 10px' }}>О нас</a>
      <a href="/contact" style={{ margin: '0 10px' }}>Контакты</a>
    </nav>
  );
}

export default Navigation;