import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MarketX</div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        {/* <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </li> */}
        <li style={styles.navItem}>
          <Link to="/sell" style={styles.navLink}>Sell</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/buy" style={styles.navLink}>Market</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'white', // Changed to white for better visibility
    padding: '20px 40px',
    position: 'sticky' as "sticky",
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added a subtle shadow
  },
  logo: {
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 15px', // Increased spacing between items
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease',
    '&:hover': { // Added hover effect
      color: '#007bff', // Example hover color
    },
  },
};

export default Navbar;