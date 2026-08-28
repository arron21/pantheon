import {
    athena,
    apollo,
    cronus,
    gaia,
    hera,
    poseidon,
    thanatos,
    uranus,
    zeus,
    artemis,
    hemera,
    nyx,
} from './pantheon.js';
import './globalLogger.js';

class Attack {
    constructor() {}

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
            zeus,
            artemis,
            hemera,
            nyx,
        ];
        const validTargets = gods.filter(target => target.name !== god.name && target.hitpoints > 0);
        if (validTargets.length === 0) {
            log('finds no valid targets to attack.', god);
            return;
        }
        const randomTarget = validTargets[Math.floor(Math.random() * validTargets.length)];
        log(`attacks ${randomTarget.name}. 🗡️`, god);
        randomTarget.hitpoints = Math.max(0, randomTarget.hitpoints - 10);
        log(`has been damaged and now has ${randomTarget.hitpoints} hitpoints. 🩸`, randomTarget);
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
            zeus,
            artemis,
            hemera,
            nyx,
        ];
        const validTargets = gods.filter(target => target.name !== god.name);
        if (validTargets.length === 0) {
            log('finds no valid targets to heal.', god);
            return;
        }
        const randomTarget = validTargets[Math.floor(Math.random() * validTargets.length)];
        log(`heals ${randomTarget.name}. 💚`, god);
        randomTarget.hitpoints += 50;
        log(`now has ${randomTarget.hitpoints} hitpoints. ❤️‍🩹`, randomTarget);
    }
}

export default Attack;