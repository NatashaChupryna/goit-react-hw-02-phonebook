import { Component } from 'react';
import { StyledApp, Title } from './App.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterContacts = event => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onFilterChange = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

addContact = (newContact) => {
  console.log(newContact)
}

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {

    return (
      <StyledApp>
        <Title>Phonebook</Title>

        <ContactForm addContact={this.addContact}></ContactForm>

        <Title>Contacts</Title>

        <Filter name={this.state.filter} onFilterChange={this.onFilterChange}></Filter>

        <ContactList contacts={this.filterContacts()} onDelete={this.deleteContact}></ContactList>

      </StyledApp>
    );
  }
}
