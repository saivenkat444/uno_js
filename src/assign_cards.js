import { logPlayers } from "./get_player_details.js";
import { shuffleCards } from "./shuffle_cards.js";
import { prepareCards } from "./prepare_deck.js";

const loggedPalyers = logPlayers();

const deck = shuffleCards(prepareCards());

const giveSevenCards = (playerName) => ({name: playerName, cards: deck.splice(0, 7)});

const distributeCards = loggedPalyers.map(giveSevenCards);

const fetchCurrentPlayerDetailsAndDisplay = (index, players) => {
    console.log(`${players[index].name}'s turn`);
    console.log("Your cards:", players[index].cards);
    return players[index];
};

const playedCards = deck.splice(0, 1);

while(true) {
    let currentPlayerIndex = 0;
    const currentPlayer = fetchCurrentPlayerDetailsAndDisplay(currentPlayerIndex, distributeCards);

    if (confirm("pick a card from deck? ")) {
        //then pick and the card in the players card
        //display his cards for another time
    }
    //ask if he wants to throw a card
    //if he does not take a card from the deck then he needs to pick a card
    //if a card is picked then the chance must be skipped


    // bad idea but i think there can be another loop to ensure that he has done a fair play 
    //like pick a card or throw a card or pick and throw a card
    //need to check for +4 and reverse as well
    if (currentPlayer.cards.length === 0) {
        console.log(`${currentPlayer.name} has won the game`);
        break;
    }
    currentPlayerIndex++;
}