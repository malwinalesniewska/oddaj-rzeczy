import React, {Component, Fragment} from 'react';
import './_ContactForm.scss';
import Decoration from '../Decoration/Decoration';
import FormValidator from '../FormValidator/FormValidator';

class ContactForm extends Component {
    constructor() {
        super();

        this.validator = new FormValidator([
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'E-mail jest wymagany'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'Wprowadź poprawny adres e-mail'
            },
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Wprowadź imię'
            },
            {
                field: 'name',
                method: 'matches',
                args: [/^[a-zA-ZĄąĆćĘęŁłŃńÓóŻżŹź '.-]*$/], // args is an optional array of arguments that will be passed to the validation method
                validWhen: true,
                message: 'Wprowadź poprawne imię'
            },
            {
                field: 'message',
                method: 'isEmpty',
                validWhen: false,
                message: 'Wiadomość jest wymagana'
            }
        ]);

        this.state = {
            name: '',
            email: '',
            message: '',
            validation: this.validator.valid()
        };

        this.submitted = false;
    }

    allInputsHandler = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        if (validation.isValid) {
            // handle actual form submission here
        }
    };

    render() {
        let validation = this.submitted ?            // if the form has been submitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation;                 // otherwise just use what's in state

        return (
            <Fragment>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
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
                            <div className={validation.name.isInvalid ? 'has-error' : undefined}>
                                <input className='contact_section__input contact_section__input--name'
                                       type='text'
                                       name='name'
                                       placeholder='Imię'
                                       onChange={this.allInputsHandler}
                                />
                                <span className='help-block ml-4'>{validation.name.message}</span>
                            </div>
                            <div className={validation.email.isInvalid ? 'has-error' : undefined}>
                                <input type='email'
                                       className='contact_section__input contact_section__input--email'
                                       name='email'
                                       placeholder='john@doe.com'
                                       onChange={this.allInputsHandler}
                                />
                                <span className='help-block ml-4'>{validation.email.message}</span>
                            </div>
                        </div>
                        <br/>
                        <div className={validation.message.isInvalid ? 'has-error' : undefined} style={{width: '100%'}}>
                            <input
                                className='contact_section__input contact_section__input--message'
                                   type='text'
                                   name='message'
                                   placeholder='Wiadomość'
                                   onChange={this.allInputsHandler}
                            />
                            <span className='help-block ml-4'>{validation.message.message}</span>
                        </div>
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
            </Fragment>
        );
    }
}

export default ContactForm;