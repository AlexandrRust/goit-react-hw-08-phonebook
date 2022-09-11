import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/semantic-ui.css';

export const PhoneInputField = props => {
  const {
    field: { name, value },
    form: { setFieldValue },
  } = props;
  const onValueInput = phoneNumber => {
    setFieldValue(name, phoneNumber);
  };
  return (
    <>
      <PhoneInput
        placeholder="Enter phone number"
        country={'ua'}
        name={name}
        value={value}
        onChange={onValueInput}
        inputStyle={{
          borderColor: 'gray',
          borderRadius: '5px',
          fontSize: '24px',
          fontWeight: 'bold',
          width: '314px',
        }}
      />
    </>
  );
};
