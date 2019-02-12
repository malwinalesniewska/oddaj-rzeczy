import React, {Component} from 'react';
import './_LogoSection.scss'
import Decoration from '../Decoration/Decoration';
import FunctionButton from "../FunctionButton/FunctionButton";

class LogoSection extends Component {

    render() {
        return (
            <section className='logo_container'>
                <div className='logo_container__image'/>
                <div className='logo_container__info'>
                    <p className='logo_container__text'>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</p>
                    <Decoration/>
                    <FunctionButton className='logo_section_buttons' text='ODDAJ RZECZY' float='left'/>
                    <FunctionButton className='logo_section_buttons' text='ZORGANIZUJ ZBIÓRKĘ' float='right'/>
                </div>
            </section>
        )
    }
}

export default LogoSection;