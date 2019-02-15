import React, {Component} from 'react';
import './_OrganisationsList.scss';
import SingleList from "../SingleList/SingleList";

class OrganisationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLeftList: [
                'Fundacja "Dbam o zdrowie"', ['Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej'],
                'Fundacja "Dla dzieci"', ['Cel i misja: Pomoc dzieciom z ubogich rodzin'],
                'Fundacja "Bez domu"', ['Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania']
            ],
            currentRightList: [
                'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
                'ubrania, meble, zabawki',
                'ubrania, jedzenie, ciepłe koce'
            ]
        }
    }

    render() {
        const {currentLeftList, currentRightList} = this.state;
        return (
            <div>
                <p>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br />
                    którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br />
                    komu pomagają i czego potrzebują.
                </p>
                <SingleList
                    leftList={currentLeftList}
                    rightList={currentRightList}
                />
            </div>
        );
    }
}

export default OrganisationsList;