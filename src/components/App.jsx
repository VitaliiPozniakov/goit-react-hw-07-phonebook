import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { Container } from './App.styled';
import Notification from './Notification';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from '../redux/contactApi';

export default function App() {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
  const [createContact] = useCreateContactMutation();
  console.log(contacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm contacts={contacts} createContact={createContact} />
      </Section>

      <Section title="Contacts">
        {contacts && <Filter />}
        {contacts ? (
          <ContactList
            contacts={contacts}
            onDelete={deleteContact}
            deliting={isDeliting}
          />
        ) : (
          <Notification message="Your contactlist is empty" />
        )}
      </Section>
    </Container>
  );
}
