import { useState, useEffect } from 'react';
import css from './App.module.css';

import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';

const initialContactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialContactsVisible = () => {
  const savedContactsList = localStorage.getItem('contacts-list');
  return savedContactsList !== null
    ? JSON.parse(savedContactsList)
    : initialContactsList;
};

// export default function App() {
const App = () => {
  const [contacts, setContacts] = useState(initialContactsVisible);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts-list', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );
  
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterName} onSearch={setFilterName} />
      <ContactList
        contacts={visibleContacts}
        onDelete={deleteContact} />
    </div>
  );
};

export default App;