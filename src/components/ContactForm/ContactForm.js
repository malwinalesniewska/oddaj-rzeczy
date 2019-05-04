import React, {Component} from 'react';
import './_ContactForm.scss';
import Decoration from '../Decoration/Decoration';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    allInputsHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        const namePattern = /^[a-zA-Z-,.ąęćźżńłśóĆŻŹŃŁŚÓ']+$/;
        const mailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const messagePattern = /^.{1,250}/;
        let info = [];
        event.preventDefault();

        if (!namePattern.test(this.state.name)) {
            info.push('Pole imię musi zostać uzupełnione');
        }
        if (!mailPattern.test(this.state.email)) {
            info.push('Pole email musi zostać uzupełnione i zawierać znak @');
        }
        if (!messagePattern.test(this.state.message)) {
            info.push('Pole wiadomość musi zostać uzupełnione');
        }
        if (namePattern.test(this.state.name) && mailPattern.test(this.state.email) && messagePattern.test(this.state.message)) {
            info = 'Dziękujemy za wysłanie formularza!'
        }

        alert(info);
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
                                onChange={this.allInputsHandler}
                            />
                            <input
                                className='contact_section__input contact_section__input--email'
                                type='email'
                                name='email'
                                placeholder='Email'
                                onChange={this.allInputsHandler}
                            />
                        </div>
                        <br/>
                        <input
                            className='contact_section__input contact_section__input--message'
                            type='text'
                            name='message'
                            placeholder='Wiadomość'
                            onChange={this.allInputsHandler}
                        />
                        <br/>
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