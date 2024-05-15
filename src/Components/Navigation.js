import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #f9f9f9;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;


const Navigation = () => (
  <NavContainer>
    <StyledLink  to="/">Home</StyledLink > 
    <StyledLink to="/About">About</StyledLink>
    {/* Add more navigation links */}
  </NavContainer>
);

export default Navigation;