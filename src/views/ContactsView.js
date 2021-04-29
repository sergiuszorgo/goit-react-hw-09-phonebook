import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import SearchForm from '../components/SearchForm';
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';

export default function ContactsView() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getAllContacts);
  const isLoadingContacts = useSelector(phonebookSelectors.getLoading);
  useEffect(() => {
    dispatch(phonebookOperations.getContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      {contacts.length > 1 && <SearchForm />}
      {isLoadingContacts ? (
        <h1 className="Load">LOADING ...</h1>
      ) : (
        <ContactList />
      )}
    </div>
  );
}
