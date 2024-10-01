const team = {
    _players : [
        {firstName : 'Rowan', lastName : 'Harris', age : 22},
        {firstName : 'Joe', lastName : 'Perry', age : 22},
        {firstName : 'Zo', lastName : 'Bean', age : 22}
    ],
    _games : [
        {opponent : 'LSE', teamPoints : 79, opponentPoints : 60 }, 
        {opponent : 'QMU', teamPoints : 90, opponentPoints : 86 },
        {opponent : 'UCL', teamPoints : 70, opponentPoints : 79 }
    ],
    //getter methods
    get players(){
        return this._players;
    },

    get games(){
        return this._games
    },

    //functional object methods

    //adds a new object to the _players list(i.e a new player to the list of players)
    addPlayer(firstName,lastName, age){
        this.players.push({firstName,lastName,age});
    },
    //adds a new object to the _games list(i.e a new game to the list of games)
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
        this.games.push({newOpponent,newTeamPoints,newOpponentPoints})
    }

}

team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans',100,98);
console.log(team.players);
console.log(team.games);