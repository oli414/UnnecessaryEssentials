(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Unes = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Delegate = exports.Delegate = function () {
    function Delegate() {
        _classCallCheck(this, Delegate);

        this.listeners = [];
    }

    _createClass(Delegate, [{
        key: "bind",
        value: function bind(listener) {
            this.listeners.push(listener);
        }
    }, {
        key: "unbind",
        value: function unbind(listener) {
            var index = this.listeners.indexOf(listener);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        }
    }, {
        key: "fire",
        value: function fire() {
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i].fire.apply(this.listeners[i], arguments);
            }
        }
    }]);

    return Delegate;
}();

},{}],2:[function(require,module,exports){
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

},{"./Delegate":1,"./Listener":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./Tickable":5}],5:[function(require,module,exports){
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

},{"../Event/Event":2}],6:[function(require,module,exports){
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

},{"../Event/Event":2}],7:[function(require,module,exports){
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

},{"./Stopwatch":4,"./Tickable":5,"./Ticker":6,"./Timer":8}],8:[function(require,module,exports){
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

},{"../Event/Event":2,"./Stopwatch":4}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = exports.Time = undefined;

var _Time = require("./Time/Time");

var _Event = require("./Event/Event");

exports.Time = _Time.Time;
exports.Event = _Event.Event;

},{"./Event/Event":2,"./Time/Time":7}]},{},[9])(9)
});
