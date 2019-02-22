import React, {Component} from 'react';
import Decoration from "../Decoration/Decoration";
import './_ListsSection.scss';
import OrganisationsList from '../OrganisationsList/OrganisationsList';

class ListsSection extends Component {
    render() {
        return (
            <div className='lists'>
                <h2 className='lists__header'>
                    Komu pomagamy?
                </h2>
                <Decoration/>
                <OrganisationsList/>
            </div>
        );
    }
}

export default ListsSection;