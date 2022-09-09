import { SecondTitle } from 'components/common/Title/Title.styled';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { authSelectors } from 'redux/auth';
import { SecondButton } from 'components/common/buttons/SecondButton.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
      <SecondTitle>Welcome {name}</SecondTitle>
      <SecondButton
        type="button"
        style={{ marginLeft: '25px' }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        logout
      </SecondButton>
    </div>
  );
};
