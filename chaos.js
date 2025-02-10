import {
    artemis,
    athena,
    apollo,
    cronus,
    gaia,
    hera,
    poseidon,
    thanatos,
    uranus,
} from './pantheon.js';

class Chaos {
    static #is = new Map();

    #tickCount = 0;
    #tickSpeed;
    #tickCallbacks;
    #values;

    constructor() {
        this.#tickSpeed = 10; // Default tick speed
        this.#tickCallbacks = [];
        this.#values = new Map();

        this.startTick();
        this.startLog();
    }

    startTick() {
        const tick = () => {
            if (this.#tickCount >= 1000) {
                console.error('Tick count has reached 1000. Ending program.');
                this.readLog();
                process.exit(0); // End the program
            }
            this.#tickCallbacks.forEach(callback => callback());
            this.#tickCount++;
            setTimeout(tick, this.#tickSpeed);
        };
        tick();
    }

    setTickSpeed(newSpeed) {
        this.#tickSpeed = newSpeed;
    }

    time() {
        return Math.floor(Math.random() * 7) + 1;
    }   

    getCurrentTickSpeed() {
        return this.#tickSpeed;
    }

    /**
     * accepts a callback function and adds it to the list of functions to be called on each tick
     * @param {*} callback 
     */
    onTick(callback) {
        this.#tickCallbacks.push(callback);
    }

    startLog() {
        setInterval(() => {
            this.readLog();
        }, 10000); // Log every 10 seconds
    }

    /**
     * Updates the value in the map with the given key and value
     * @param {string} key 
     * @param {*} value 
     */
    updateValue(key, value) {
        Chaos.#is.set(key, value);
    }

    /**
     * Retrieves the value from the map with the given key
     * @param {string} key 
     * @returns {*} value
     */
    getValue(key) {
        return Chaos.#is.get(key);
    }

    /**
     * Logs the current values in the map to the console
     */
    readLog() {
        console.clear();
        console.log(this.#tickCount);
        console.log(`The state of Chaos's Log:`);
        console.table(Chaos.#is);

        const gods = [    
            artemis,
            athena,
            apollo,
            cronus,
            gaia,
            hera,
            poseidon,
            thanatos,
            uranus]

        gods.forEach(god => {
            console.log(`${god.name} has ${god.hitpoints} hitpoints.`);
        });
    }

    summon() {
        this.updateValue('doesExist', true);
        console.log('Chaos has been summoned.');
    }
}

export default Chaos;
