// !=============redux============
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import {
  ContactList,
  ContactListItem,
  Text,
  Button,
} from './ContactsList.styled';
import Notiflix from 'notiflix';
import { deleteContact } from 'redux/operations';

export const ContactsListRedux = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const onDeleteContact = contact => {
    dispatch(deleteContact(contact.id));
    Notiflix.Notify.info(`Contact ${contact.name} has been deleted`);
  };

  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id}>
          <Text>
            {contact.name} : {contact.phone}
          </Text>
          <Button onClick={() => onDeleteContact(contact)}>delete</Button>
        </ContactListItem>
      ))}
    </ContactList>
  );
};
