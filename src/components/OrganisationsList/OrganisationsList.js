import React, {Component} from 'react';
import './_OrganisationsList.scss';
import SingleList from "../SingleList/SingleList";
import OrganisationButton from "../OrganisationButton/OrganisationButton";

class OrganisationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }

    foundationsButton = index => {
        if (index === 1) {
            this.setState({
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
            })
        }
    };

    nonGovernmentalButton = index => {
        if (index === 2) {
            this.setState({
                currentLeftList: [
                    'Organizacja1', ['Cel i misja: Lorem ipsum dolot sit amet'],
                    'Organizacja2', ['Cel i misja: Lorem ipsum dolot sit amet'],
                    'Organizacja3', ['Cel i misja: Lorem ipsum dolot sit amet']
                ],
                currentRightList: [
                    'Gumbo beet greens corn soko endive gumbo gourd',
                    'Gumbo beet greens corn soko endive gumbo gourd',
                    'Gumbo beet greens corn soko endive gumbo gourd'
                ]
            })
        }
    };

    localButton = index => {
        if (index === 3) {
            this.setState({
                currentLeftList: [
                    'Zbiórka1', ['Cel i misja: Lorem ipsum dolot sit amet'],
                    'Zbiórka2', ['Cel i misja: Lorem ipsum dolot sit amet'],
                    'Zbiórka3', ['Cel i misja: Lorem ipsum dolot sit amet']
                ],
                currentRightList: [
                    'Gumbo beet greens corn soko endive gumbo gourd',
                    'Gumbo beet greens corn soko endive gumbo gourd',
                    'Gumbo beet greens corn soko endive gumbo gourd'
                ]
            })
        }
    };

    render() {
        const {currentLeftList, currentRightList} = this.state;
        return (
            <div className='organisations_lists'>
                <div className='organisations_lists__buttons'>
                    <OrganisationButton
                        text='Fundacjom'
                        onClick={this.foundationsButton}
                        index={1}
                    />
                    <OrganisationButton
                        text='Organizacjom pozarządowym'
                        onClick={this.nonGovernmentalButton}
                        index={2}
                    />
                    <OrganisationButton
                        text='Lokalnym zbiórkom'
                        onClick={this.localButton}
                        index={3}
                    />
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