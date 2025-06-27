import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
  background: '#f0f0f0',
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
