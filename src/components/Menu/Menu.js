import React, {Component} from 'react';
import './_Menu.scss';

class Menu extends Component {
    render() {
        return (
            <ul className='menu'>
                <span className='menu__element--square'/>
                <li className='menu__element'>Start</li>
                <li className='menu__element'>O co chodzi?</li>
                <li className='menu__element'>O nas</li>
                <li className='menu__element'>Fundacje i organizacje</li>
                <li className='menu__element'>Kontakt</li>
            </ul>
        );
    }
}

export default Menu;