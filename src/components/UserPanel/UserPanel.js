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
                <span className='user_panel__login'>
                    Zaloguj
                </span>
                <div className='user_panel__register'>
                    <span>Załóż konto</span>
                </div>
            </div>
        )
    }
}

export default UserPanel;