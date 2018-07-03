
import { Event } from "../Event/Event";

export class Ticker {
    constructor() {
        this.onTick = new Event.Delegate();
        this.tickables = [];
        this._lastTime = 0;
        this._shouldStop = false;
    }
    start() {
        this._lastTime = Date.now();
        window.requestAnimationFrame(this.tick.bind(this));
    }
    stop() {
        this.shouldStop = true;
    }
    tick() {
        if (this.shouldStop) {
            this.shouldStop = false;
            return;
        }

        var now = Date.now()
        var deltaTime = (now - this._lastTime) * 0.001;
        this._lastTime = now;

        for (var i = 0; i < this.tickables.length; i++) {
            this.tickables[i].tick(deltaTime);
        }

        this.onTick.fire(deltaTime);

        window.requestAnimationFrame(this.tick.bind(this));
    }
}
