import { Formik, ErrorMessage } from 'formik';
import { PhoneForm } from './PhoneBookForm.styled';
import { Label } from 'components/common/Label/Label.styled';
import { FirstButton } from 'components/common/buttons/FirstButton.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux/es/exports';
import { contactsOperations } from 'redux/contacts';
import { FormikInput } from 'components/common/Input/Input.styled';

const nameValid = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameValid,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(3)
    .required(),
});

export const PhoneBookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    dispatch(contactsOperations.addContacts({ name, number }));
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <PhoneForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <FormikInput type="text" name="name" />
          <ErrorMessage name="name" />
        </Label>
        <Label htmlFor="name">
          Phone
          <FormikInput type="tel" name="number" />
          <ErrorMessage name="number" />
        </Label>
        <FirstButton type="submit">Add Contact</FirstButton>
      </PhoneForm>
    </Formik>
  );
};
