const audienceNames = {
    FOUNDATION: 'foundation',
    NON_GOV: 'nonGovernmental',
    LOCAL: 'local'
};

const audienceListMap = {
    foundation: {
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
    },
    nonGovernmental: {
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
    },
    local: {
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
    }
};

export {
    audienceListMap,
    audienceNames
};
