import React from 'react';
import { useSelector } from 'react-redux';
import css from './app.module.css';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

export const App = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.phoneBook.contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(filter)
  );

  const contactsList = filter.length > 0 ? filteredContacts : contacts;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <div className={css.contacts__container}>
            <Filter />
            <ContactList contacts={contactsList} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
