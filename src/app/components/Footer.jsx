import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Bloggy. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
  },
};

export default Footer;