import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Name, Inner, Remove } from './Contact.styled';
import { removeContact } from 'redux/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Name>{`${name}: `}</Name>
      <Inner>
        <span>{number}</span>
        <Remove type="button" onClick={() => dispatch(removeContact(id))}>
          X
        </Remove>
      </Inner>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
