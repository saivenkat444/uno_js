// const colours = ["red", "green", "blue", "yellow"];
const colours = ["red"];

const cards = [
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

const prepareCards = function (OrderedColour) {
    return cards.flatMap(({attribute, count}) => Array.from({ length: count }, () => ({ colour: OrderedColour, attribute })))
}
console.log(colours.flatMap(prepareCards))  
// console.log(Object.entries(cards))
