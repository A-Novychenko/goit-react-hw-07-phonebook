import { useDispatch, useSelector } from 'react-redux';

import { Contact } from 'components/Contact';
import { List, Item } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectedVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectedVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
