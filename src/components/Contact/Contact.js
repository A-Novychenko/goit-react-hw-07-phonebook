import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Name, Inner, Remove } from './Contact.styled';
import { deleteContact } from 'redux/operations';

export const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Name>{`${name}: `}</Name>
      <Inner>
        <span>{phone}</span>
        <Remove type="button" onClick={() => dispatch(deleteContact(id))}>
          X
        </Remove>
      </Inner>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
