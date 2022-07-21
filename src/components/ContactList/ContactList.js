import React from 'react';
import { List, Span, Item, Btn } from './ContactList.styled';
import { deleteContact } from '../../redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';

const ContactList = ({contacts, onDelete, deliting}) => {
  // const visibleContacts = useSelector(getVisibleContacts);
  // const dispatch = useDispatch();

// console.log(contacts.contacts)
// console.log(contacts)
// console.log(onDelete)

// contacts.contacts.map(({ id, phone, name }) => console.log(name))

  return (
    <List>
      {contacts.map(({ id, phone, name }) => (
        <Item key={id}>
          <Span></Span>
          {name}: {phone}
          <Btn onClick={()=>onDelete(id)}>{deliting ? 'Deliting...' : 'Delete'}</Btn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
