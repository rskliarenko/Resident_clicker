// class enemy for manipulation enemy data
export class EnemyModel {
    powerStep = 20;
    power = 100;

    // init data or enemy
    constructor(name, image, level) {
        this.name = name;
        this.image = image;
        this.level = level;
    }

    //reduce power of enemy
    reducePower() {
        this.power -= this.powerStep;
    }

    // check if enemy is dead
    isDead() {
        return this.power <= 0;
    }

    // reset initial power
    resetPower() {
        this.power = 100;
    }
}
