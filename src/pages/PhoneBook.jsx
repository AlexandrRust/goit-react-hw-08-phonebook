import { Box } from 'components/common/Box/Box.styled';
import { Filter } from 'components/Filter/Filter';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { PhoneBookList } from 'components/PhoneBookList/PhoneBookList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const PhoneBook = () => {
  const dispatch = useDispatch(contactsOperations.getContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);
  return (
    <>
      <Box>
        <PhoneBookForm />
      </Box>
      <Box>
        <Filter />
        {contacts.length === 0 ? (
          <h2> У вас нет сохраненных контактов </h2>
        ) : (
          <PhoneBookList />
        )}
      </Box>
    </>
  );
};

export default PhoneBook;
