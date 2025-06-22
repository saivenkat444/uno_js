export const shuffleCards = function (deck) {
    const cards = [...deck];
    const shuffledCards = cards.sort(function () {
      return Math.random() - 0.5;
    });
    return shuffledCards;
}


