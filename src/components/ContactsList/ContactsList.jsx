import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { DeleteButton, ContactsListItem } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(cont => (
        <ContactsListItem key={cont.id}>
          {cont.name}: {cont.number}
          <DeleteButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(cont.id));
            }}
          >
            Delete
          </DeleteButton>
        </ContactsListItem>
      ))}
    </ul>
  );
};
