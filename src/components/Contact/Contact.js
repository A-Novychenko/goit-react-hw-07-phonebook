import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Name, Inner, Remove } from './Contact.styled';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';

export const Contact = ({ name, phone, id }) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsBtnActive(true);
  };

  return (
    <>
      <Name>{`${name}: `}</Name>
      <Inner>
        <span>{phone}</span>
        <Remove type="button" onClick={handleDelete} disabled={isBtnActive}>
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
