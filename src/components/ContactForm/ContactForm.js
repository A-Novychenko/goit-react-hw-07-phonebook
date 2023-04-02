import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import {
  Add,
  FormWrap,
  Input,
  Label,
  ErrorName,
  ErrorTel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const INITIAL_STATE = {
  name: '',
  number: '+38',
};

const Schema = Yup.object().shape({
  name: Yup.string().max(20, 'Max: 20 symbols').required(),
  number: Yup.string()
    .phone('UK', 'Please enter a valid phone number in the format for UKRAINE')
    .required('A phone number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleForm = (values, { resetForm }) => {
    const { name, number } = values;

    if (contacts.length) {
      const isInConntacts =
        contacts.find(contact => contact.name === name) ||
        contacts.find(contact => contact.number === number);

      if (isInConntacts) {
        alert(`${name} is already in contacts.`);
        return;
      }
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_STATE}
      validationSchema={Schema}
      onSubmit={handleForm}
    >
      <FormWrap>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage component={ErrorName} name="name" />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component={ErrorTel} />
        </Label>
        <Add type="submit">Add contact</Add>
      </FormWrap>
    </Formik>
  );
};
