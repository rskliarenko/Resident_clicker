// class for working with player data
export class PlayerModel {
    score = 0

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // reset score when game restarts
    // and show it on html element
    resetPlayerScore() {
        this.score = 0;
    }

    // add score for user and update score on html element
    addPlayerScore(){
        this.score += 1;
    }
}
