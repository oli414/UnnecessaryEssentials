
export class Listener {
    constructor (callback, obj = null) {
        this.obj = obj;
        this.callback = callback;
    }
    fire() {
        this.callback.apply(this.obj, arguments);
    }
}