import React, {Component} from 'react';
import './_SingleList.scss';


class SingleList extends Component {
    render() {
        const {leftList, rightList} = this.props;
        return (
            <div className='organisations_list'>
                <ul className='organisations_list__left'>
                    {leftList.map(function nested(elem, index) {
                        if (Array.isArray(elem)) {
                            return (
                                elem.map(nested =>
                                    <span
                                        className='organisations_list__single organisations_list__single--mission'
                                        key={index}
                                    >
                                        {nested}
                                    </span>
                        ))} else {
                            return (
                            <li
                                className='organisations_list__single'
                                key={index}
                            >
                                {elem}
                            </li>
                        )}
                    })}
                </ul>
                <ul className='organisations_list__right'>
                    {rightList.map((elem, index) =>
                        <li
                            className='organisations_list__single organisations_list__single--right_list'
                            key={index}
                        >
                            {elem}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default SingleList;
