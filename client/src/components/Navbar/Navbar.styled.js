import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f0f0f0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
