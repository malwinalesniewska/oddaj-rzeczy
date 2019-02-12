import React, {Component} from 'react';
import './_FunctionButton.scss';

class FunctionButton extends Component {

    render() {
        const {float, text, className} = this.props;
        return (
            <button className={className}
                    style={{float: float}}
            >{text}</button>
        );
    }
}

export default FunctionButton;

