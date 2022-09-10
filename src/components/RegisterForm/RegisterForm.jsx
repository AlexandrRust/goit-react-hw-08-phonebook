import { FirstButton } from 'components/common/buttons/FirstButton.styled';
import { FormikInput } from 'components/common/Input/Input.styled';
import { Label } from 'components/common/Label/Label.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import * as yup from 'yup';

const nameValid = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(nameValid, 'Name may contain only letters'),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(7, 'Password is too short - should be 8 chars minimum.'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const hadleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={hadleSubmit}
      >
        <Form autoComplete="off">
          <Label htmlFor="name">
            Name
            <FormikInput type="text" name="name" />
            <ErrorMessage name="name" />
          </Label>
          <Label htmlFor="email">
            Email
            <FormikInput type="email" name="email" />
            <ErrorMessage name="email" />
          </Label>
          <Label htmlFor="password">
            Password
            <FormikInput type="password" name="password" />
            <ErrorMessage name="password" />
          </Label>
          <FirstButton type="submit">Register</FirstButton>
        </Form>
      </Formik>
    </>
  );
};
