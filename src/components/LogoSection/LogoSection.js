import React, {Component} from 'react';
import './_LogoSection.scss'
import Decoration from '../Decoration/Decoration';
import FunctionButtons from "../FunctionButtons/FunctionButtons";

class LogoSection extends Component {
    render() {
        return (
            <section className='logo_container'>
                <div className='logo_container__image'/>
                <div className='logo_container__info'>
                    <p className='logo_container__text'>
                        Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce
                    </p>
                    <Decoration/>
                    <div className='logo_container__buttons'>
                        <FunctionButtons
                            text='ODDAJ RZECZY'
                        />
                        <FunctionButtons
                            text='ZORGANIZUJ ZBIÓRKĘ'
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default LogoSection;