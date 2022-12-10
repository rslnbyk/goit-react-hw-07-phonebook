import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" name="filter" onChange={handleChange} />
    </label>
  );
};
