
const logPlayers = function () {
    const totalPlayers = +prompt("ENTER THE TOTAL NUMBER OF PLAYERS (SHOULD BE IN BETWEEN 2 AND 10)");
    if (totalPlayers < 2 || totalPlayers > 10) {
        return logPlayers();
    }
    return Array.from({length: totalPlayers}, () => prompt("ENTER THE PLAYER NAME"));
}

console.log(logPlayers());