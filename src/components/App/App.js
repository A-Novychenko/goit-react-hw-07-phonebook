import { ContactForm } from 'components/ContactForm';
import { GlobalStyle } from 'constants/GlobalStyles';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container, Wrap, MainTitle, Title, StyleArround } from './App.styled';

export const App = () => (
  <Container>
    <Wrap>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Wrap>
    <StyleArround />
    <GlobalStyle></GlobalStyle>
  </Container>
);
