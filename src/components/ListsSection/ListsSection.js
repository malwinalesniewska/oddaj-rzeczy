import React, {Component} from 'react';
import Decoration from "../Decoration/Decoration";
import './_ListsSection.scss';
import OrganisationsList from '../OrganisationsList/OrganisationsList';

class ListsSection extends Component {
    render() {
        return (
            <section>
                <div className='lists__container'>
                    <h2 className='lists__header'>
                        Komu pomagamy?
                    </h2>
                    <Decoration/>
                    <OrganisationsList/>
                </div>
            </section>
        );
    }
}

export default ListsSection;