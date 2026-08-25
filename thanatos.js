import Nyx from './nyx.js';
import {
    artemis,
    athena,
    apollo,
    cronus,
    gaia,
    hera,
    poseidon,
    uranus,
    zeus,
    hemera,
    nyx
} from './pantheon.js';
import './globalLogger.js';

class Thanatos extends Nyx {
    name = 'Thanatos';
    hitpoints = 1000;

    constructor() {
        super();
        
        const guided = new Set();
        
        this.onTick(() => {
            const deities = [
                artemis,
                athena,
                apollo,
                cronus,
                gaia,
                hera,
                poseidon,
                uranus,
                zeus,
                hemera,
                nyx
            ];
            
            deities.forEach(god => {
                if (god && god.hitpoints <= 0 && !guided.has(god.name)) {
                    guided.add(god.name);
                    log(`guides the soul of deceased ${god.name} to the Underworld. 💀`, this);
                }
            });
        });
    }
}

export default Thanatos;
