
import { Stopwatch } from "./Stopwatch";
import { Event } from "../Event/Event";

export class Timer extends Stopwatch {
    constructor(endTime = 0, startTime = 0, isPaused = false) {
        super(startTime, isPaused);
        this.endTime = endTime;
        this.onFinished = new Event.Delegate();
    }
    tick(deltaTime) {
        if (this.time < this.endTime)
        {
            super.tick(deltaTime);
            if (this.time >= this.endTime)
            {
                this.onFinished.fire();
            }
        }
    }
}