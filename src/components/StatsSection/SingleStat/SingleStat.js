import React, {Component} from 'react';
import './_SingleStat.scss'

class SingleStat extends Component {
    render() {
        return (
            <div className='single_stat__container'>
                <p className='single_stat single_stat__number'>{this.props.number}</p>
                <p className='single_stat single_stat__title'>{this.props.title}</p>
                <p className='single_stat single_stat__text'>{this.props.text}</p>
            </div>
        );
    }
}

export default SingleStat;