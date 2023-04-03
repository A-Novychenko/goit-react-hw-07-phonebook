import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, getFilter } from 'redux/selectors';

import { Contact } from 'components/Contact';
import { List, Item } from './ContactList.styled';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
const filteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.length
    ? filteredContacts(contacts, filter)
    : [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <List>
        {visibleContacts.map(({ name, id, phone }) => (
          <Item key={id}>
            <Contact name={name} phone={phone} id={id}></Contact>
          </Item>
        ))}
      </List>
    </>
  );
};
