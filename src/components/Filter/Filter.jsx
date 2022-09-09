import { Label } from 'components/common/Label/Label.styled';
import { Input } from 'components/common/Input/Input.styled';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addFilter } from 'redux/contacts/contacts-slice';
import { contactsSelectors } from 'redux/contacts';

export const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const filter = e.currentTarget.value;
    dispatch(addFilter(filter));
  };
  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={changeFilter}
      />
    </Label>
  );
};
