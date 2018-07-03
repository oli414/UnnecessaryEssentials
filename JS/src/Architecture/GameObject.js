
import { UnesArray } from "../Core/UnesArray";

export class GameObject {
    constructor() {
        this._components = new UnesArray();
        this._children = new UnesArray();
        this._parent = null;
    }
    _update(deltaTime) {
        update(deltaTime);
        this._components.iterate(function (index, item) {
            item.update(deltaTime);
        });
        this._children.iterate(function (index, item) {
            item._update(deltaTime);
        });
    }
    update(deltaTime) {

    }
    onDestroy() {

    }

    addComponent(ComponentType) {
        var newComponent = new ComponentType(this);
        this._components.push(newComponent);
        return newComponent;
    }
}