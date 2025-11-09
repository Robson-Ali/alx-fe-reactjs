import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#004080',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/services">Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
