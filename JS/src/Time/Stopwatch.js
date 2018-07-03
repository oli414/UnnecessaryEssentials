
import { Tickable } from "./Tickable";

export class Stopwatch extends Tickable {
    constructor(startTime = 0, isPaused = false) {
        super();
        this.time = startTime;
        this.isPaused = isPaused;
    }
    tick(deltaTime) {
        if (!this.isPaused)
            this.time += deltaTime;
    }
}