import React, {Component} from 'react';
import './_Header.scss';
import UserPanel from '../UserPanel/UserPanel';
import Menu from "../Menu/Menu";

class Header extends Component {
    render() {
        return (
            <div className='container'>
                <header>
                    <nav>
                        <UserPanel/>
                        <Menu/>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;