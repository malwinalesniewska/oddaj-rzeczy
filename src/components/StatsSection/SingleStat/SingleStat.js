import React, {Component} from 'react';
import './_SingleStat.scss'

class SingleStat extends Component {
    render() {
        const {number, title, text} = this.props;
        return (
            <div className='single_stat'>
                <p className='single_stat__number'>
                    {number}
                </p>
                <p className='single_stat__title'>
                    {title}
                </p>
                <p className='single_stat__text'>
                    {text}
                </p>
            </div>
        );
    }
}

export default SingleStat;