import { NavList } from 'layout/common/AppBar/common/Nav/NavList.styled';
import { HeaderLink } from 'components/common/NavLink/HeaderLink.styled';

export const AuthNav = () => {
  return (
    <NavList>
      <HeaderLink to={'/register'}>Register</HeaderLink>
      <HeaderLink to={'/login'}>Login</HeaderLink>
    </NavList>
  );
};
