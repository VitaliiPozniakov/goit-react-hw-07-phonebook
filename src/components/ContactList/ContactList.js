import React from 'react';
import { List, Span, Item, Btn } from './ContactList.styled';

import { useSelector } from 'react-redux';

const ContactList = ({ contacts, onDelete, deliting }) => {
  const filter = useSelector(state => state.filter);

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const visibleContacts = filtredContacts();

  console.log(visibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, phone, name }) => (
        <Item key={id}>
          <Span></Span>
          {name}: {phone}
          <Btn type="button" disabled={deliting} onClick={() => onDelete(id)}>
            {deliting ? 'Deliting...' : 'Delete'}
          </Btn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
