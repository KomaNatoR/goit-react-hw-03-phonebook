import React, { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        name: '',
        number: ''  
    };

    createContact = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        const {onSubmit} =this.props;
        let id = nanoid();
        let person = { id: id, name: name, number:number};

        onSubmit(person);
        this.resetInputs();
    };
    hendleInput = (e) => {
        const stateKey = e.currentTarget.name;

        this.setState({ [stateKey]: e.currentTarget.value });
    };
    resetInputs = () => {
        this.setState({name: '', number: '',});  
    };

    render() {
        return (
        <form onSubmit={this.createContact}>
            <label>Name
                <input
                    type="text"
                    name="name"
                    placeholder="Standart Form"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.hendleInput}
                />
            </label>
            <label>Number
                <input
                    type="tel"
                    name="number"
                    placeholder="Standart Form"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.hendleInput}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
        )
    };
};
Form.propTypes = {
    onSubmit:PropTypes.func.isRequired,
};

export default Form;