import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

FunctionButtons.propTypes = {
    text: PropTypes.string
};

export default FunctionButtons;
