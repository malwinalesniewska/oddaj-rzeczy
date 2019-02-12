import React, {Component} from 'react';
import './_FunctionButton.scss';

class FunctionButton extends Component {

    render() {
        const {width, height, margin, float, text} = this.props;
        return (
            <button className='function_button'
                    style={{width: width,
                            height: height,
                            marginTop: margin,
                            float: float}}
            >{text}</button>
        );
    }
}

export default FunctionButton;

