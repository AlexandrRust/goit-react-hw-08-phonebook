import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: bold;
  :hover,
  :focus {
    border-bottom: 3px solid black;
  }
`;
