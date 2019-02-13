import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_SingleStep.scss';


class SingleStep extends Component {
    render() {
        const {icon, title, text, className} = this.props;
        return (
            <div className='single_step'>
                <FontAwesomeIcon
                    icon={icon}
                    className='single_step__icon'
                />
                <h3
                    className={className}>
                    {title}
                </h3>
                <p
                    className='single_step__text'
                >
                    {text}
                </p>
            </div>
        );
    }
}

export default SingleStep;