import React, {Component} from 'react';
import './_Header.scss';
import UserPanel from '../UserPanel/UserPanel';

class Header extends Component {
    render() {
        return (
            <header>
                <UserPanel/>
                <nav>
                    <ul className='menu'>
                        <span className='menu__element--square'/>
                        <li className='menu__element'>Start</li>
                        <li className='menu__element'>O co chodzi?</li>
                        <li className='menu__element'>O nas</li>
                        <li className='menu__element'>Fundacje i organizacje</li>
                        <li className='menu__element'>Kontakt</li>
                    </ul>
                </nav>
                {/*osobny komponent*/}
            </header>
        )
    }
}

export default Header;