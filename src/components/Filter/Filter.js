import React from 'react';
import { Input, Label, LabelText } from './Filter.styled';
import { filterContacts } from '../../redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <Label>
      <LabelText>Find contacts by name</LabelText>
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </Label>
  );
};

export default Filter;
