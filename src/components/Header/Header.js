import React, {Component} from 'react';
import './_Header.scss';
import UserPanel from '../UserPanel/UserPanel';
// import { Container, Row, Col } from 'react-grid-system';

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
            </header>
        )
    }
}

export default Header;

// {/*<Container>*/}
//     {/*<Row>*/}
//         {/*<Col md={8}>START</Col>*/}
//         {/*<Col md={2}>START</Col>*/}
//         {/*<Col md={2}>START</Col>*/}
//     {/*</Row>*/}
// {/*</Container>*/}