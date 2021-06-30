"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// 类的定义
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log(this.name + " is running");
        return this.name + " is running";
    };
    return Animal;
}());
exports.Animal = Animal;
var snake = new Animal('lily');
snake.run();
//继承
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log(this.name + " is barking");
        return this.name + " is barking";
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var xiaobao = new Dog('xiaobao');
xiaobao.bark();
// 多态
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.run = function () {
        return 'miao,' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
var maomao = new Cat('maomao');
maomao.run();
exports.fridge = {
    deviceId: 123,
    homeId: 321,
    title: '冰箱'
};
exports.fridge.category;
