import { NavContainer, NavLink } from './Navbar.styled.js';

function Navbar() {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavContainer>
  );
}

export default Navbar;
