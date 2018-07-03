
export class Delegate {
    constructor() {
        this.listeners = [];
    }
    bind(listener) {
        this.listeners.push(listener);
    }
    unbind(listener) {
        var index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
    fire() {
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i].fire.apply(this.listeners[i], arguments);
        }
    }
}