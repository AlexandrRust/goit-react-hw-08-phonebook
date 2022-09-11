import { AuthNav } from 'layout/common/AuthNav/AuthNav';
import { Header } from 'components/common/Header/Header.styled';
import { HeaderLink } from 'components/common/NavLink/HeaderLink.styled';
import { UserMenu } from 'layout/common/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavList } from './common/Nav/NavList.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <NavList>
        <HeaderLink to={'/'}>Home</HeaderLink>
        {isLoggedIn && <HeaderLink to={'/contacts'}>Contacts</HeaderLink>}
      </NavList>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
