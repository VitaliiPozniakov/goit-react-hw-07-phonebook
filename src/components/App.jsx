import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { Container } from './App.styled';
import Notification from './Notification';
import { useGetContactsQuery } from '../redux/contacts/contactApi';

export default function App() {
  const { data: contacts } = useGetContactsQuery();

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts && contacts.length > 0 && <Filter />}
        {contacts && contacts.length > 0 ? (
          <ContactList contacts={contacts} />
        ) : (
          <Notification message="Your contactlist is empty" />
        )}
      </Section>
    </Container>
  );
}
