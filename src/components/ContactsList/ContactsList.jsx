import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { DeleteButton, ContactsListItem } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(cont => (
        <ContactsListItem key={cont.id}>
          {cont.name}: {cont.phone}
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
