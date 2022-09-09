import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header } from 'components/common/Header/Header.styled';
import { HeaderLink } from 'components/common/NavLink/HeaderLink.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavList } from './Nav/NavList.styled';

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
