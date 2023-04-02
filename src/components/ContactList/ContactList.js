import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Contact } from 'components/Contact';
import { List, Item } from './ContactList.styled';
const filteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.length
    ? filteredContacts(contacts, filter)
    : [];

  return (
    <>
      <List>
        {visibleContacts.map(({ name, id, number }) => (
          <Item key={id}>
            <Contact name={name} number={number} id={id}></Contact>
          </Item>
        ))}
      </List>
    </>
  );
};
