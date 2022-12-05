import css from './Form.module.css'
import React from "react";


export class Form extends React.Component {
  
  state = { 
    name: '',
    number: '',
   };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(
      event.target.elements.name.value,
      event.target.elements.number.value
    )
    this.reset();
  }
  
  reset = () => {
    this.setState({ name: '', number: '' });
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          Name
          <input className={css.input}
            type="text"
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.btn}>Add contact</button>
      </form>
    )
  }
}