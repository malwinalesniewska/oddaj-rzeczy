import React, {Component} from 'react';
import './_ContactForm.scss';
import Decoration from '../Decoration/Decoration';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    userName = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    userEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    };

    userMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    };

    handleSubmit = (event) => {
        let info = '';
        event.preventDefault();

        if (this.state.name === '') {
            info = 'Pole imię musi zostać uzupełnione'
        } else if (!this.state.email.includes('@') || this.state.email === '') {
            info = 'Pole email musi zostać uzupełnione i zawierać znak @'
        } else if (this.state.message === '') {
            info = 'Pole wiadomość musi zostać uzupełnione'
        } else {
            info = 'Dziękujemy za wysłanie formularza!'
        }

        alert(info)
    };

    render() {
        return (
            <div className='contact_section'>
                <div className='contact_section__main'>
                    <p className='contact_section__title'>
                        Skontaktuj się z nami
                    </p>
                    <Decoration/>
                    <form className='contact_section__form'>
                        <p className='contact_section__form_title'>
                            FORMULARZ KONTAKTOWY
                        </p>
                        <div className='contact_section__name_email_inputs'>
                            <input
                                className='contact_section__input contact_section__input--name'
                                type='text'
                                name='name'
                                placeholder='Imię'
                                onChange={this.userName}
                            />
                            <input
                                className='contact_section__input contact_section__input--email'
                                type='email'
                                name='email'
                                placeholder='Email'
                                onChange={this.userEmail}
                            />
                        </div>
                        <br />
                        <input
                            className='contact_section__input contact_section__input--message'
                            type='text'
                            name='message'
                            placeholder='Wiadomość'
                            onChange={this.userMessage}
                        />
                        <br />
                        <input
                            className='contact_section__input contact_section__input--send'
                            type='submit'
                            value='Wyślij'
                            onClick={this.handleSubmit}
                        />
                    </form>
                </div>
                <footer className='contact_section__footer'>
                    <p>
                        Copyright 2015 &copy; by Anna Dadej
                    </p>
                    <div className='contact_section__social'>
                        <button className='contact_section__media'>
                            <div className='contact_section__media--facebook'/>
                        </button>
                        <button className='contact_section__media'>
                            <div className='contact_section__media--instagram'/>
                        </button>
                    </div>
                </footer>
            </div>
        );
    }
}

export default ContactForm;