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
                    <FunctionButton text='ODDAJ RZECZY' width='250px' height='100px' margin='80px' float='left'/>
                    <FunctionButton text='ZORGANIZUJ ZBIÓRKĘ' width='250px' height='100px' margin='80px' float='right'/>
                </div>
            </section>
        )
    }
}

export default LogoSection;