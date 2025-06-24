import { logPlayers } from "./get_player_details.js";
import { shuffleCards } from "./shuffle_cards.js";
import { prepareCards } from "./prepare_deck.js";

const loggedPalyers = logPlayers();
const deck = shuffleCards(prepareCards());
// console.log(deck)

const giveSevenCards = (playerName) => ({name: playerName, cards: deck.splice(0, 7)});

const distributeCards = loggedPalyers.map(giveSevenCards)

console.log(distributeCards);