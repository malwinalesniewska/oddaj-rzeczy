import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './_OrganisationButton.scss';

class OrganisationButton extends Component {
    clickHandler = () => {
        const {name, onClick} = this.props;
        onClick(name)
    };

    render() {
        const {text} = this.props;
        return (
            <button
                className='organisation_button'
                onClick={this.clickHandler}
            >
                {text}
            </button>
        )
    }
}

OrganisationButton.ropTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default OrganisationButton;