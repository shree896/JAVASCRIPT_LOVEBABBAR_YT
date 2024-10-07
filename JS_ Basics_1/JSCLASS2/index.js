//   
//object create

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('draw');
//     }
// };

//factory function

// function createRectangle(length, breadth){
//     return rectangle = {
//         length: length,
//         breadth: breadth,

//         draw(){
//         console.log('drawing rectangle');
//         }
//     };
    
// };
// let rectangleobj1 = createRectangle(3,4);
// let rectangleobj2 = createRectangle(6,7);
// let rectangleobj3 = createRectangle(8,9);
// console.log(rectangleobj1);

//contructor function->Pascal Notation -> first letter of every work is capital -> NumberOfStudents

function Rectangle(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log("drawing");
    }
} 


//Object creation using constructor fxn

let rectangleObject = new Rectangle();

// rectangleObject.color = "yellow";
// console.log(rectangleObject);

// delete rectangleObject.color
// console.log(rectangleObject);

let Rectangle1 = new Function(
    'length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log("drawing");
    }`);
 
//object creating using Rectangle1

// let rect = new Rectangle1(2,3);

// console.log(Rectangle.constructor);

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// let a = { value: 10};
// let b = a;
// a.value++;

// console.log(a);
// console.log(b);

// let a = 10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// let a = { value: 10}
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);

let rectangle = {
    length:2,
    breadth:4,
};

//for-in loop
// for(let key in rectangle){
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log('Color is present');
// }
// else{
//     console.log("Absent");
// }

//Object Cloning --method 1
// let src = {
//     a:20,
//     b:30,
//     c:40
// }

// let dest = {}

// for(let key in src){
//     dest[key] = src[key]
// }
// console.log(dest);

// src.a++;
// console.log(dest);

//method 2
// let src = {
//     a:10,
//     b:20,
//     c:30,
// }

// let dest = Object.assign({}, src);

// console.log(dest);

// src.a++;
// console.log(dest);

//or
// let src = {
//     a:10,
//     b:20,
//     c:30,
// }

// let src2 = { value: 25};
// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;
// console.log(dest);

//method3
let src = {
    a:10,
    b:20,
    c:30
};

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);
