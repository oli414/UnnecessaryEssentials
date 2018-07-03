
import { ExtendableBuiltin } from "./ExtendableBuiltin";

export class UnesArray extends ExtendableBuiltin(Array) {
    constructor(...items) {
        super(...items);
    }
    // Removes an item from the array
    removeItem(item) {
        var i = this.indexOf(item);
        if (i > -1) {
            this.splice(i, 1);
            return true;
        }
        return false;
    }
    // forEach with ability to break by returning true in the callback.
    iterate(body) {
        for (var i = 0; i < this.length; i++) {
            if (body(i, this[i]))
                break;
        }
    }
}