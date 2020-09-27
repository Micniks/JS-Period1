var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color) {
        var _this = this;
        this.toString = function () {
            return "a " + _this._color + " shape";
        };
        this._color = color;
    }
    Object.defineProperty(Shape.prototype, "color", {
        //A
        get: function () {
            return this._color;
        },
        set: function (newColor) {
            this._color = newColor;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
//B
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(colour, radius) {
        var _this = _super.call(this, colour) || this;
        _this._radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return Math.PI * Math.pow(this._radius, 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "perimeter", {
        get: function () {
            return Math.PI * this._radius * 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (newRadius) {
            this._radius = newRadius;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}(Shape));
var testCircle = new Circle("Purple", 10);
console.log(testCircle.toString());
console.log("Perimeter: " + String(testCircle.perimeter));
console.log("Area: " + String(testCircle.area));
console.log("Radius: " + String(testCircle.radius));
console.log("Color: " + testCircle.color);
console.log("\n\n");
//C
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(colour, radius, height) {
        var _this = _super.call(this, colour, radius) || this;
        _this._height = height;
        return _this;
    }
    Object.defineProperty(Cylinder.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (newHeight) {
            this._height = newHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "perimeter", {
        get: function () {
            throw "Not implemented yet!";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "area", {
        get: function () {
            return (2 * Math.PI * Math.pow(this.radius, 2)) + 2 * Math.PI * this.radius * this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "volume", {
        get: function () {
            return Math.PI * this.radius * 2 * this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Cylinder;
}(Circle));
var testCylinder = new Cylinder("Green", 10, 40);
console.log(testCylinder.toString());
console.log("Area: " + String(testCylinder.area));
console.log("Radius: " + String(testCylinder.radius));
console.log("Height: " + String(testCylinder.height));
console.log("Color: " + testCylinder.color);
