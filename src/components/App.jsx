import React, { Component } from "react";

import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { MainDiv } from "./app.styled";
// import FormikForm from "./FormikForm/FormikForm";

export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  // ----------------------------------------|   МЕТОДИ ЦИКЛА
  componentDidMount() {
    const contactsLocalStor = localStorage.getItem('todos');
    const contactsParse = JSON.parse(contactsLocalStor);

    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('todos', JSON.stringify(contacts));
    };
  };


// ----------------- ADD CONTACT -------------------
  addContact = (person) => {
    const { contacts } = this.state;
    const personNormalize = person.name.toLowerCase();
    const contactsMap = contacts.find(cont => cont.name.toLowerCase() === personNormalize);

    if (contactsMap) return alert("Pleace don't do it!");
    this.setState(prevState => ({contacts: [person,...prevState.contacts]}));
  };
// ----------------- FILTER CONTACT ------------------
  filterName = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
// -----------------DELETE CONTACT --------------------
  deleteContact = (contId) => {
    const { contacts } = this.state;
    const filterContact = contacts.filter(cont => cont.id !== contId);
    
    this.setState(prevState=>({contacts: filterContact}));
  };

  // ---------------RENDER-----------------------
  render() {
    const { contacts, filter } = this.state;
    
    const normalizeFilter = filter.toLowerCase();
    const visiblePersons = contacts.filter(cont=>cont.name.toLowerCase().includes(normalizeFilter));

    return (
      <MainDiv>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        {/* <FormikForm onSubmit={this.addContact} /> */}
      
        <h2>Contacts</h2>  
        <Filter onChange={this.filterName} value={this.state.filter} />
        <ContactList renderData={visiblePersons} onClick={this.deleteContact} />
      </MainDiv>
    );
  }
};