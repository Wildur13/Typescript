"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
// Type Assignment
// Explicit: 
var firstName = "Willy";
// implicit: hier we also call it infer
var firstname = "WIlly";
// Array definition
var names = [];
names.push(firstname);
// Readonly
var names1 = [firstname];
// Rectangle 
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
var rect = new Rectangle();
rect.height = 20;
rect.width = 15;
var square = {
    height: 10,
    width: 10
};
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("Area of square is = " + square.height * square.width + " m^2");
console.log("Area of rectangle is = " + rect.height * rect.width + " m^2");
console.log("likeCount: ".concat(component.likeCount, ", isSelected: ").concat(component.isSelected));
