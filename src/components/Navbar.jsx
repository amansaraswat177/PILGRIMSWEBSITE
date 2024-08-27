import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Pilgrim Religious Places</div>
      <ul style={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: 'black', // Changed to light green
  },
  logo: {
    fontSize: '32px',
    fontFamily: 'var(--font-family-secondary)',
    color: 'red', // Changed to yellow
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
  },
};

export default Navbar;
