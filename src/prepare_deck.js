// const colours = ["red", "green", "blue", "yellow"];
const colours = ["red"];

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

const prepareColorCards = function (OrderedColour) {
    return colourCards.flatMap(({attribute, count}) => Array.from({ length: count }, () => ({ type: OrderedColour, attribute })))
}

const prepareWildCards = function () {
    return wildCards.flatMap(({attribute, count}) => Array.from({length:count}, () => ({type: "Wild", attribute})))
}
const prepareCards = function (colours) {
    const deck = [];
    const colouredCards = colours.flatMap(prepareColorCards);
    const wildCards = prepareWildCards();
    deck.push(colouredCards);
    deck.push(wildCards);
    return deck.flat();
}
console.log(prepareCards(colours))
// console.log(Object.entries(cards))
