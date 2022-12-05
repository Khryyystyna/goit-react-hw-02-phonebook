import React from "react";
import { nanoid } from 'nanoid'
import { Form } from './Form/Form'
import { ContactsList } from './ContactsList/ContactsList'
import { Filter } from "./Filter/Filter";

export class App extends React.Component {
 state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
             {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
             {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
             {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: '',
  name: '',
  number: ''
  }
  
  formSubmit = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    console.log(contact)
      
    if (contacts.find(contact => contact.name === name)) {
      alert(name + ' is already in contacts.')
    } else {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    }
   
    console.log(name)
    console.log(number)
    };

  handleChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => 
        contact.id !== contactId),
    }))
  }
  
    render() {
      return (
        <>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmit} contacts={this.state.contacts} /> 
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.handleChangeFilter}/>
          <ContactsList
            contacts={this.getFilterContact()}
            onDelete={this.onDelete} />
        </>
      )
}
};
