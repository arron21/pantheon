import Cronus from "./cronus.js";
import './globalLogger.js';

class Poseidon extends Cronus {
    name = 'Poseidon';
    hitpoints = 400;

    constructor() {
        super();
        this.updateValue('tsunamisCreated', 0);
        this.updateValue('seaCreaturesControlled', 0);
        this.updateValue('stormsCaused', 0);
        this.updateValue('whirlpoolsCreated', 0);
    }

    createTsunami() {
        log('is creating a tsunami.', this);
        this.fight(this)

        this.updateValue('tsunamisCreated', this.getValue('tsunamisCreated') + 1);
    }

    controlSeaCreatures() {
        log('is controlling sea creatures.', this);
        this.updateValue('seaCreaturesControlled', this.getValue('seaCreaturesControlled') + 1);
    }

    causeStorm() {
        log('is causing a storm.', this);
        this.updateValue('stormsCaused', this.getValue('stormsCaused') + 1);
    }

    createWhirlpool() {
        log('is creating a whirlpool.', this);
        this.updateValue('whirlpoolsCreated', this.getValue('whirlpoolsCreated') + 1);
    }
}

export default Poseidon;
