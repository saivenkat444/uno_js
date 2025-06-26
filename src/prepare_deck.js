const colours = ["red", "green", "blue","yellow"];

const colourCards = [
    { attribute: "0", count: 1 },
    { attribute: "1", count: 2 },
    { attribute: "2", count: 2 },
    { attribute: "3", count: 2 },
    { attribute: "4", count: 2 },
    { attribute: "5", count: 2 },
    { attribute: "6", count: 2 },
    { attribute: "7", count: 2 },
    { attribute: "8", count: 2 },
    { attribute: "9", count: 2 },
    { attribute: "reverse", count: 2 },
    { attribute: "skip", count: 2 },
    { attribute: "+2", count: 2 }
];

const wildCards = [
    {attribute: "colour_change", count:4},
    {attribute: "+4", count:4},
]

export const prepareColorCards = function (colour) {
    return colourCards.flatMap(({attribute, count}) => Array.from({ length: count}, () => ({ type: colour, attribute})))
}

export const prepareWildCards = function () {
    return wildCards.flatMap(({attribute, count}) => Array.from({ length: count}, () => ({ type: "Wild", attribute })))
}

export const prepareCards = function () {
    const colouredCards = colours.flatMap(prepareColorCards);
    const wildCards = prepareWildCards();
    return [...colouredCards, ...wildCards];
}
