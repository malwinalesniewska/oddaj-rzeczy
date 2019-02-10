import React, {Component} from 'react';
import './_FunctionButton.scss';

class FunctionButton extends Component {

    render() {
        return (
            <button className='function_button'
                    style={{width: this.props.width,
                            height: this.props.height,
                            marginTop: this.props.margin,
                            float: this.props.float}}
            >{this.props.text}</button>
        );
    }
}

export default FunctionButton;

