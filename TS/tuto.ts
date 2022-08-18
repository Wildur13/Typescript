import { LikeComponent } from './like.component'

// Type Assignment
    // Explicit: 
    let firstName: string = "Willy";
    // implicit: hier we also call it infer
    let firstname = "WIlly";

// Array definition
    const names: string[] = [];
    names.push(firstname);

    // Readonly
    const names1: readonly string[] =[firstname];
    //names1.push("Durand");


// Interfaces definition
// Car
interface Car{
    model: string;
    motor: number;
    year: number;
    type: string;

}

interface ToyotaCar extends Car{
    color: string;
    price: number;
}

// Rectangle 
class Rectangle {
    height!: number;
    width!: number;
}

const rect = new Rectangle();
rect.height = 20;
rect.width = 15;

interface Square extends Rectangle { 
}

const square: Square = {
    height: 10,
    width: 10
}

let component = new LikeComponent(10, true);

component.onClick();
console.log("Area of square is = " + square.height * square.width + " m^2");
console.log("Area of rectangle is = " + rect.height * rect.width + " m^2");
console.log(`likeCount: ${ component.likeCount}, isSelected: ${ component.isSelected }`);