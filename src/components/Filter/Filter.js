import { useDispatch, useSelector } from 'react-redux';
import { FilterBox, Label, Search } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <FilterBox>
      <Label>
        Find contacts by name
        <Search
          type="text"
          name="filter"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={filter}
          onChange={handleChange}
        />
      </Label>
    </FilterBox>
  );
};
