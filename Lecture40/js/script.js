// lecture 48 
// function constructors, prototype, and the 'this' keyword

// function test() {
//     console.log(this);
//     this.myName = "Claudia";
// }
// test();
// console.log(window.myName);

//function constructors
// function Circle (radius) {
//     this.radius = radius;     
// }
// Circle.prototype.getArea = 
//     function () {
//        return Math.PI * Math.pow(this.radius, 2);
//     }
// 
// var myCircle = new Circle(10);
// console.log(myCircle);
// 
// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// Lecture 49: Object Literals and the 'this' Keyword
// var literalCircle = {
//     radius: 10,
// 
//     getArea: function () {
//         console.log(this);
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalCircle.getArea());

// function Dog(name) {
//    this.name = name;
// 
// Dog.prototype.bark = function () {
//    console.log(this.name + " likes barking! Bark!");
// }
// 
// var max = new Dog("Max", "Buddy");
// max.bark();

// Lecture 50, Part 1: Arrays
// var array = new Array();
// array[0] = "Claudia";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS"};
// 
// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// short hand array creation
// var names = ["Claudia", "Andy", "Juna"];
// console.log(names);
// 
// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }
// 
// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// Lecture 50, Part 2: Arrays
// var names2 = ["Claudia", "Andy", "Juna"];

// var myObj = {
//     name: "Claudia",
//     course: "HTML/CSS/JS",
//     platform: "Coursera"
// };
// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop]);
// };

// for (var name in names2) {
//     console.log("Hello " + names2[name]);
// }

// Lecture 51: Closures
// function makeMultiplier (multiplier) {
//     return (
//         function (x) {
//             return multiplier * x;
//         }
//     );
// };
// 
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));