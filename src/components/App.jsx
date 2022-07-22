import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { Container } from './App.styled';
import Notification from './Notification';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from '../redux/contactApi';


export default function App() {
  const { data: contacts } = useGetContactsQuery();

  const [createContact] = useCreateContactMutation();

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
       
          />
        ) : (
          <Notification message="Your contactlist is empty" />
        )}
      </Section>
    </Container>
  );
}
