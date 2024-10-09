// game class for game manipulation
export class GameModel {
    player;
    enemies;
    prevEnemy;
    currentEnemy;
    level = 1;

    constructor(enemies, player) {
        this.enemies = enemies;
        this.player = player;
        this.setCurrentEnemy();
    }

    // method when click on enemy to kill its
    // we check if it's end of game and if yes we start end game screen
    // if we killed enemy we up the level
    // if enemy is live we reduce its power add score for user
    killEnemy() {
        if(this.currentEnemy.isDead()) return;
        this.reduceEnemyPower();
        this.addPlayerScore();
    }

    // actions which we run when restart game
    // reset level, reset power for enemies, set up new enemy,
    // show html elements after restart game
    restart() {
        this.level = 1;
        this.player.resetPlayerScore();
        this.enemies.forEach(enemy => enemy.resetPower());
        this.setCurrentEnemy();
    }

    // get enemy by level
    getEnemyBy(level){
        return this.enemies.find(enemy => enemy.level === level) || this.enemies[this.enemies.length - 1];
    }

    // up level and set up enemy data into html element
    upLevel() {
        this.level += 1;
    }

    // set up current enemy data into html element
    setCurrentEnemy() {
        this.prevEnemy = this.currentEnemy;
        this.currentEnemy = this.getEnemyBy(this.level);
    }

    // reduce enemy power
    reduceEnemyPower() {
        if(this.currentEnemy) this.currentEnemy.reducePower();
    }

    // add player score
    addPlayerScore() {
        if(this.player) this.player.addPlayerScore();
    }

    // check if game is ended
    isOver() {
        return this.enemies.reduce((total, { power }) => total + power, 0) === 0;
    }

    isFinalLevel() {
        return this.level === this.enemies.length;
    }
}
