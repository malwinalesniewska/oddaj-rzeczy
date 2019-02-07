import React, {Component} from 'react';
import './_UserPanel.scss'

class UserPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    render() {
        return (
            <div className='user_panel'>
                <span className='log_in'>Zaloguj</span>
                <div><span className='register'>Załóż konto</span></div>
            </div>
        )
    }
}

export default UserPanel;