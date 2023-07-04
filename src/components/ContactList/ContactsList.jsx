// !=============redux============
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import {
  ContactList,
  ContactListItem,
  Text,
  Button,
} from './ContactsList.styled';
import Notiflix from 'notiflix';

export const ContactsListRedux = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onDeleteContact = contact => {
    dispatch(removeContact(contact.id));
    Notiflix.Notify.info(`Contact ${contact.name} has been deleted`);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id}>
          <Text>
            {contact.name} : {contact.number}
          </Text>
          <Button onClick={() => onDeleteContact(contact)}>delete</Button>
        </ContactListItem>
      ))}
    </ContactList>
  );
};
