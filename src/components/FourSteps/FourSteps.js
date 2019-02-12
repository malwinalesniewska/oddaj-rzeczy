import React, {Component} from 'react';
import SingleStep from "./SingleStep/SingleStep";
import Decoration from '../Decoration/Decoration';
import FunctionButton from '../FunctionButton/FunctionButton';
import { faHands } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import './_FourSteps.scss';

class FourSteps extends Component {
    render() {
        return (
            <section className='four_steps'>
                <p className='four_steps__title'>Wystarczą 4 proste kroki</p>
                <Decoration/>
                <div className='four_steps__innerContainer'>
                    <SingleStep icon={faHands} title='Wybierz rzeczy' text='ubrania, zabawki, sprzęt i inne'/>
                    <SingleStep icon={faDownload} title='Spakuj je' text='skorzystaj z worków na śmieci'/>
                    <SingleStep icon={faSearch} title='Zdecyduj komu chcesz pomóc' text='wybierz zaufane miejsce'/>
                    <SingleStep icon={faPeopleCarry} title='Zamów kuriera' text='kurier przyjedzie w dogodnym terminie'/>
                </div>
                <FunctionButton width='240px' height='75px' margin='30px' text='ZAŁÓŻ KONTO'/>
            </section>
        );
    }
}

export default FourSteps;