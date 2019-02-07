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
                        <span/>
                        <li>Start</li>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacje i organizacje</li>
                        <li>Kontakt</li>
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