import { SecondButton } from 'components/common/buttons/SecondButton.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { BookList } from './BookList.styled';
import { BookListItem } from './BookListItem.styled';

export const PhoneBookList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };
  const deleteContact = id => {
    dispatch(contactsOperations.deleteContacts(id));
  };
  return (
    <BookList>
      <tbody>
        {getVisibleContacts().map(({ name, id, number }) => (
          <tr key={id}>
            <BookListItem>{name}</BookListItem>
            <BookListItem>{number}</BookListItem>
            <BookListItem>
              <SecondButton
                type="button"
                name={name}
                onClick={() => deleteContact(id)}
              >
                delete
              </SecondButton>
            </BookListItem>
          </tr>
        ))}
      </tbody>
    </BookList>
  );
};
