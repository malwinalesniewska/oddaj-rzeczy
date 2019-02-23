import React, {Component} from 'react';
import './_OrganisationsList.scss';
import SingleList from "../SingleList/SingleList";
import OrganisationButton from "../OrganisationButton/OrganisationButton";
import {audienceListMap, audienceNames} from "./audienceListMap";


const organisations = [
    {
        name: audienceNames.FOUNDATION,
        title:'Fundacjom'
    },
    {
        name: audienceNames.NON_GOV,
        title: 'Organizacjom pozarządowym'
    },
    {
        name: audienceNames.LOCAL,
        title: 'Lokalnym zbiórkom'
    }
];

class OrganisationsList extends Component {
    state = {
            currentLeftList: [
                'Fundacja “Dbam o zdrowie”', ['Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej'],
                'Fundacja “Dla dzieci”', ['Cel i misja: Pomoc dzieciom z ubogich rodzin'],
                'Fundacja “Bez domu”', ['Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania']
            ],
            currentRightList: [
                'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
                'ubrania, meble, zabawki',
                'ubrania, jedzenie, ciepłe koce'
            ]
    };

    showAudienceList = name => {
        this.setState(audienceListMap[name])
    };

    render() {
        const {currentLeftList, currentRightList} = this.state;
        return (
            <div className='organisations_lists'>
                <div className='organisations_lists__buttons'>
                    {organisations.map((organisation) => {
                        return <OrganisationButton
                                    text={organisation.title}
                                    name={organisation.name}
                                    onClick={this.showAudienceList}
                                />
                    })}
                </div>
                <p className='organisations_lists__description'>
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