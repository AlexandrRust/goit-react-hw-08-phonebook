import { FirstButton } from 'components/common/buttons/FirstButton.styled';
import { FormikInput } from 'components/common/Input/Input.styled';
import { Label } from 'components/common/Label/Label.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(7, 'Password is too short - should be 8 chars minimum.'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const hadleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={hadleSubmit}
      >
        <Form autoComplete="off">
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
          <FirstButton type="submit">Login</FirstButton>
        </Form>
      </Formik>
    </>
  );
};
