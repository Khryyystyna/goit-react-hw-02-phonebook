import React from "react";
import { nanoid } from 'nanoid'
import { Form } from './Form/Form'
import { ContactsList } from './ContactsList/ContactsList'


export class App extends React.Component {
 state = {
  contacts: [],
  name: ''
  }
  
  formSubmit = data => {
    const { name } = data;
    const contact = {
      id: nanoid(),
      name
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    console.log(data)
  };

  
    render() {
      return (
        <>
          <p>Phonebook</p>
          <Form onSubmit={this.formSubmit} contacts={this.state.contacts} /> 
          <p>Contacts</p>
          <ContactsList
            contacts={this.state.contacts} />
        </>
      )
}
};
