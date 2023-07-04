// !===============redux====================
import {
  Container,
  Title,
  Head,
  FormContainer,
  LeftContainer,
  Template,
} from './App.styled';

import { ContactFormRedux } from '../ContactForm/ContactForm';
import { ContactsListRedux } from '../ContactList/ContactsList';
import { FilterRedux } from '../Filter/Filter';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
// import Footer from 'components/Footer/Footer';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <Head>PhoneBook</Head>
      <Container>
        <FormContainer>
          <ContactFormRedux />
        </FormContainer>

        {contacts.length === 0 ? (
          <Template>add new contact</Template>
        ) : (
          <LeftContainer>
            <Title>Contacts</Title>
            <FilterRedux />

            <ContactsListRedux />
          </LeftContainer>
        )}
      </Container>
      {/* <Footer /> */}
    </>
  );
};

// import React, { useState, useEffect } from 'react';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactsList } from '../ContactList/ContactsList';
// import { Filter } from 'components/Filter/Filter';
// import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';

// export const App = () => {
//   const [contacts, setContacts] = useState(
//     JSON.parse(window.localStorage.getItem('contacts')) ?? []
//   );
//   const [filter, setFilter] = useState('');

// const addContact = data => {
//   const oldContact = contacts.map(oldContact =>
//     oldContact.name.toLowerCase()
//   );

// if (oldContact.includes(data.name.toLowerCase())) {
//   return Notiflix.Notify.failure(`${data.name} is alredy in contacts`);
// }

//     const newContact = { id: nanoid(2), ...data };

//     setContacts([...contacts, newContact]);

// Notiflix.Notify.success(`${data.name} contact has been added `);
// };

//   const deleteContact = (contactId, name) => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));

//     Notiflix.Notify.info(`Contact ${name}  has been deleted`);
//   };

//   const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizeFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   const visibleContacts = getVisibleContacts();

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <>
//       <Head>PhoneBook</Head>
//       <Container>
//         <FormContainer>
//           <ContactForm onSubmit={addContact} />
//         </FormContainer>

//         <LeftContainer>
//           {contacts.length === 0 ? (
//             <p>Sorry,you have not contacts in phonebook!</p>
//           ) : (
//             <>
//               <Title>Contacts</Title>
//               <Filter value={filter} onChange={changeFilter} />
//               <ContactsList
//                 visibleContacts={visibleContacts}
//                 onDelete={deleteContact}
//               />
//             </>
//           )}
//         </LeftContainer>
//       </Container>
//     </>
//   );
// };
