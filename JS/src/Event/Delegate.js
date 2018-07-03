
import { UnesArray } from "../Core/UnesArray";

export class Delegate {
    constructor() {
        this._listeners = new UnesArray();
    }
    bind(listener) {
        this._listeners.push(listener);
    }
    unbind(listener) {
        return this._listeners.removeItem(listener);
    }
    fire() {
        this._listeners.iterate(function(index, item) {
            item.fire.apply(item, arguments);
        });
    }
}