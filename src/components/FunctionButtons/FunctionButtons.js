import React, {Component} from 'react';
import './_FunctionButtons.scss';

class FunctionButtons extends Component {

    render() {
        const {text} = this.props;
        return (
            <button
                className='function_buttons'
            >
                {text}
            </button>
        );
    }
}

export default FunctionButtons;
