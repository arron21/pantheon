import Zeus from './zeus.js';
import './globalLogger.js';

class Apollo extends Zeus {
    name = 'Apollo';
    hitpoints = 200;

    keys = [
        'C', 'D', 'E', 'F', 'G', 'A', 'B'
    ];

    constructor() {
        super();
    }

    makeMusic() {
        const randomKey = this.keys[Math.floor(Math.random() * this.keys.length)];
        log(`Playing a song in the key of ${randomKey}`, this);
    }

    castHeal() {
        this.heal(this);
    }

    prophesy() {
        const prophecies = [
            'A great war is coming.',
            'You will find love soon.',
            'Beware of the Ides of March.',
            'A great fortune awaits you.',
            'You will face a difficult challenge.'
        ];
        const randomProphecy = prophecies[Math.floor(Math.random() * prophecies.length)];
        log(`prophesies: "${randomProphecy}"`, this);
    }

    driveChariot() {
        log('is driving the chariot across the sky.', this);
        // Implementation for driving the chariot
    }

    // Add methods and properties as needed
}

export default Apollo;
