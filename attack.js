import {
    athena,
    apollo,
    cronus,
    gaia,
    hera,
    poseidon,
    thanatos,
    uranus,
} from './pantheon.js';
import './globalLogger.js';

class Attack {
    constructor() {

    
        
    }

    attack(god) {
        const gods = [    
            athena,
            apollo,
            cronus,
            gaia,
            hera,
            poseidon,
            thanatos,
            uranus,
        ]
        const validTargets = gods.filter(target => target.name !== god.name);
        if (validTargets.length === 0) {
            console.log('No valid targets available.');
            return;
        }
        const randomTarget = validTargets[Math.floor(Math.random() * validTargets.length)];
        console.log(`${god.name} is attacking ${randomTarget.name}.`);
        randomTarget.hitpoints -= 10;
        console.log(`${randomTarget.name} now has ${randomTarget.hitpoints} hitpoints.`);
        log(`now has ${randomTarget.hitpoints} hitpoints. 🗡️`, randomTarget);
    
    }

    heal(god) {
        const gods = [    
            athena,
            apollo,
            cronus,
            gaia,
            hera,
            poseidon,
            thanatos,
            uranus,
        ]
        const validTargets = gods.filter(target => target.name !== god.name);
        if (validTargets.length === 0) {
            log('No valid targets available.');
            return;
        }
        const randomTarget = validTargets[Math.floor(Math.random() * validTargets.length)];
        log(`${god.name} is healing ${randomTarget.name}.`);
        randomTarget.hitpoints += 50;
        log(`now has ${randomTarget.hitpoints} hitpoints. ❤️‍🩹`, randomTarget);
    
    }
}

export default Attack;