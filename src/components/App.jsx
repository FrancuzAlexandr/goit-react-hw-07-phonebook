import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.find(item => item.name === name)
      ? alert(`${name} is already exists`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          contact={this.state.contacts}
        />

        {this.state.contacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <div>
              <Filter onChange={this.handleFilter} />
              <ContactList
                contacts={filteredContacts}
                deleteContact={this.deleteContact}
              />
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
