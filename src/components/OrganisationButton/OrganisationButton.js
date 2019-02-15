import React, {Component} from 'react';
import './_OrganisationButton.scss';

class OrganisationButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }

    clickHandler = (event) => {
        this.setState({
            isClicked: !this.state.isClicked
        })
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

export default OrganisationButton;