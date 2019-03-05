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
        list: [
            {
                title: 'Fundacja “Dbam o zdrowie”',
                description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
                items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                title: 'Fundacja “Dla dzieci”',
                description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin',
                items: 'ubrania, meble, zabawki'
            },
            {
                title: 'Fundacja “Bez domu”',
                description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
                items: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Fundacja “4”',
                description: 'Cel i misja: Pomoc dla szpitalom',
                items: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Fundacja “5”',
                description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
                items: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Fundacja “6”',
                description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
                items: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Fundacja “7”',
                description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
                items: 'ubrania, jedzenie, ciepłe koce'
            }
        ]
    };

    showAudienceList = name => {
        this.setState(audienceListMap[name])
    };

    render() {
        const {
            list
        } = this.state;
        return (
            <div className='organisations_lists'>
                <div className='organisations_lists__buttons'>
                    {organisations.map((organisation) => {
                        return <OrganisationButton
                                    text={organisation.title}
                                    name={organisation.name}
                                    onClick={this.showAudienceList}
                                    key={organisation.name}
                                />
                    })}
                </div>
                <p className='organisations_lists__description'>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br />
                    którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br />
                    komu pomagają i czego potrzebują.
                </p>
                <SingleList
                    list={list}
                />
            </div>
        );
    }
}

export default OrganisationsList;