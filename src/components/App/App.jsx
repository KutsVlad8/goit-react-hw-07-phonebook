import { ContactFormRedux } from 'components/ContactForm/ContactForm';
import { ContactsListRedux } from 'components/ContactList/ContactsList';
import { FilterRedux } from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';
import {
  Container,
  Title,
  Head,
  FormContainer,
  LeftContainer,
  Template,
} from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <Head>PhoneBook</Head>
      <Container>
        <FormContainer>
          <ContactFormRedux />
        </FormContainer>

        {contacts.length > 0 ? (
          <LeftContainer>
            <Title>Contacts</Title>
            <FilterRedux />

            <ContactsListRedux />
          </LeftContainer>
        ) : (
          <Template>add new contact</Template>
        )}
      </Container>
      <Footer />
    </>
  );
};
