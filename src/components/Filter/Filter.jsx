// !=============redux============

import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';
import { Input, Label } from './Filter.styled';
import { nanoid } from '@reduxjs/toolkit';

export const FilterRedux = () => {
  const dispatch = useDispatch();

  const handleChangeFilterInput = event => {
    dispatch(filter(event.target.value));
  };

  const filterInputId = nanoid(2);

  return (
    <>
      <Label htmlFor={filterInputId}>Filter contacts</Label>
      <Input
        id={filterInputId}
        type="text"
        placeholder="search"
        onChange={handleChangeFilterInput}
      />
    </>
  );
};

// import PropTypes from 'prop-types';
// export const Filter = ({ value, onChange }) => (
//   <label>
//     Find contacts by name
//     <Input type="text" value={value} onChange={onChange} />
//   </label>
// );

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
