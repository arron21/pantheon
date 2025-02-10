import Uranus from './uranus.js';
import './globalLogger.js';
import Attack from "./attack.js";
class Cronus extends Uranus {
    name = 'Cronus';
    hitpoints = 2000;
    fight = new Attack().attack
    heal = new Attack().heal

    constructor() {
        super();
        

    }


    devourChildren() {
        log('is devouring his children.', this);
        this.fight(this)

        // Implementation for devouring children
    }

    wieldScythe() {
        log('is wielding his scythe.', this);
        // Implementation for wielding scythe
    }

    overthrowUranus() {
        log('is overthrowing Uranus.', this);
        // Implementation for overthrowing Uranus
    }
}

export default Cronus;
