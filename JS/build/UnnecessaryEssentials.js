(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Unes = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Core = undefined;

var _UnesArray = require("./UnesArray");

var Core = {
    UnesArray: _UnesArray.UnesArray
};

exports.Core = Core;

},{"./UnesArray":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExtendableBuiltin = ExtendableBuiltin;
function ExtendableBuiltin(cls) {
    function ExtendableBuiltin() {
        cls.apply(this, arguments);
    }
    ExtendableBuiltin.prototype = Object.create(cls.prototype);
    Object.setPrototypeOf(ExtendableBuiltin, cls);

    return ExtendableBuiltin;
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnesArray = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ExtendableBuiltin2 = require("./ExtendableBuiltin");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnesArray = exports.UnesArray = function (_ExtendableBuiltin) {
    _inherits(UnesArray, _ExtendableBuiltin);

    function UnesArray() {
        var _ref;

        _classCallCheck(this, UnesArray);

        for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
            items[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = UnesArray.__proto__ || Object.getPrototypeOf(UnesArray)).call.apply(_ref, [this].concat(items)));
    }
    // Removes an item from the array


    _createClass(UnesArray, [{
        key: "removeItem",
        value: function removeItem(item) {
            var i = this.indexOf(item);
            if (i > -1) {
                this.splice(i, 1);
                return true;
            }
            return false;
        }
        // forEach with ability to break by returning true in the callback.

    }, {
        key: "iterate",
        value: function iterate(body) {
            for (var i = 0; i < this.length; i++) {
                if (body(i, this[i])) break;
            }
        }
    }]);

    return UnesArray;
}((0, _ExtendableBuiltin2.ExtendableBuiltin)(Array));

},{"./ExtendableBuiltin":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Delegate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UnesArray = require("../Core/UnesArray");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Delegate = exports.Delegate = function () {
    function Delegate() {
        _classCallCheck(this, Delegate);

        this._listeners = new _UnesArray.UnesArray();
    }

    _createClass(Delegate, [{
        key: "bind",
        value: function bind(listener) {
            this._listeners.push(listener);
        }
    }, {
        key: "unbind",
        value: function unbind(listener) {
            return this._listeners.removeItem(listener);
        }
    }, {
        key: "fire",
        value: function fire() {
            this._listeners.iterate(function (index, item) {
                item.fire.apply(item, arguments);
            });
        }
    }]);

    return Delegate;
}();

},{"../Core/UnesArray":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _Delegate = require("./Delegate");

var _Listener = require("./Listener");

var Event = {
    Delegate: _Delegate.Delegate,
    Listener: _Listener.Listener
};

exports.Event = Event;

},{"./Delegate":4,"./Listener":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Listener = exports.Listener = function () {
    function Listener(callback) {
        var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Listener);

        this.obj = obj;
        this.callback = callback;
    }

    _createClass(Listener, [{
        key: "fire",
        value: function fire() {
            this.callback.apply(this.obj, arguments);
        }
    }]);

    return Listener;
}();

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Stopwatch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tickable2 = require("./Tickable");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = exports.Stopwatch = function (_Tickable) {
    _inherits(Stopwatch, _Tickable);

    function Stopwatch() {
        var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var isPaused = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

        _this.time = startTime;
        _this.isPaused = isPaused;
        return _this;
    }

    _createClass(Stopwatch, [{
        key: "tick",
        value: function tick(deltaTime) {
            if (!this.isPaused) this.time += deltaTime;
        }
    }]);

    return Stopwatch;
}(_Tickable2.Tickable);

},{"./Tickable":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tickable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Event = require("../Event/Event");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tickable = exports.Tickable = function () {
    function Tickable() {
        _classCallCheck(this, Tickable);
    }

    _createClass(Tickable, [{
        key: "tick",
        value: function tick(deltaTime) {}
    }]);

    return Tickable;
}();

},{"../Event/Event":5}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ticker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Event = require("../Event/Event");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ticker = exports.Ticker = function () {
    function Ticker() {
        _classCallCheck(this, Ticker);

        this.onTick = new _Event.Event.Delegate();
        this.tickables = [];
        this._lastTime = 0;
        this._shouldStop = false;
    }

    _createClass(Ticker, [{
        key: "start",
        value: function start() {
            this._lastTime = Date.now();
            window.requestAnimationFrame(this.tick.bind(this));
        }
    }, {
        key: "stop",
        value: function stop() {
            this.shouldStop = true;
        }
    }, {
        key: "tick",
        value: function tick() {
            if (this.shouldStop) {
                this.shouldStop = false;
                return;
            }

            var now = Date.now();
            var deltaTime = (now - this._lastTime) * 0.001;
            this._lastTime = now;

            for (var i = 0; i < this.tickables.length; i++) {
                this.tickables[i].tick(deltaTime);
            }

            this.onTick.fire(deltaTime);

            window.requestAnimationFrame(this.tick.bind(this));
        }
    }]);

    return Ticker;
}();

},{"../Event/Event":5}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Stopwatch = exports.Time = undefined;

var _Stopwatch = require("./Stopwatch");

var _Timer = require("./Timer");

var _Tickable = require("./Tickable");

var _Ticker = require("./Ticker");

var Time = {
    Stopwatch: _Stopwatch.Stopwatch,
    Timer: _Timer.Timer,
    Tickable: _Tickable.Tickable,
    Ticker: _Ticker.Ticker
};

exports.Time = Time;
exports.Stopwatch = _Stopwatch.Stopwatch;

},{"./Stopwatch":7,"./Tickable":8,"./Ticker":9,"./Timer":11}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Stopwatch2 = require("./Stopwatch");

var _Event = require("../Event/Event");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = exports.Timer = function (_Stopwatch) {
    _inherits(Timer, _Stopwatch);

    function Timer() {
        var endTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var isPaused = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, startTime, isPaused));

        _this.endTime = endTime;
        _this.onFinished = new _Event.Event.Delegate();
        return _this;
    }

    _createClass(Timer, [{
        key: "tick",
        value: function tick(deltaTime) {
            if (this.time < this.endTime) {
                _get(Timer.prototype.__proto__ || Object.getPrototypeOf(Timer.prototype), "tick", this).call(this, deltaTime);
                if (this.time >= this.endTime) {
                    this.onFinished.fire();
                }
            }
        }
    }]);

    return Timer;
}(_Stopwatch2.Stopwatch);

},{"../Event/Event":5,"./Stopwatch":7}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Core = exports.Event = exports.Time = undefined;

var _Time = require("./Time/Time");

var _Event = require("./Event/Event");

var _Core = require("./Core/Core");

exports.Time = _Time.Time;
exports.Event = _Event.Event;
exports.Core = _Core.Core;

},{"./Core/Core":1,"./Event/Event":5,"./Time/Time":10}]},{},[12])(12)
});
