import React, {Component} from 'react';
import './_SingleList.scss';

class SingleList extends Component {
    render() {
        const {leftList, rightList} = this.props;
        return (
            <div className='organisations_list'>
                <ul>
                    {leftList.map(function nested(elem, index) {
                        if (Array.isArray(elem)) {
                            return elem.map(nested => <span key={index}>{nested}</span>)
                        } else {
                            return <li key={index}>{elem}</li>
                        }
                    })}
                </ul>
                <ul>
                    {rightList.map((elem, index) =>
                        <li key={index}>{elem}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default SingleList;
