import { useDispatch, useSelector } from 'react-redux';

import { Contact } from 'components/Contact';
import { List, Item } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectedVisibleContacts,
} from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectedVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div style={{ height: '16px' }}>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

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
