import { NavList } from 'components/AppBar/Nav/NavList.styled';
import { HeaderLink } from 'components/common/NavLink/HeaderLink.styled';

export const AuthNav = () => {
  return (
    <NavList>
      <HeaderLink to={'/register'}>Register</HeaderLink>
      <HeaderLink to={'/login'}>Login</HeaderLink>
    </NavList>
  );
};
