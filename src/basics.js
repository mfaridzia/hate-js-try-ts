"use strict";
/*
  Basics TypeScript
*/
exports.__esModule = true;
// Variables
var txt = "Hello World!";
var num = 1;
console.log(num);
num = 2;
console.log(num);
var num2 = 10;
console.log(num2);
// Simple Array
var numbers = ['10', '20', '30'];
console.log(numbers);
// tuple, fixed length
var dataTest = [1, 2, 'test']; // error -> dataTest = ['test', 2, 2];
// Object
var biodata = {
    name: 'Fulana',
    age: 20
};
/* errror ->
  biodata = {
    name: 'fulana'
  }
*/
console.log(biodata);
// optional operator 
var biodata2 = {
    name: 'Fulana'
};
var biodata3 = { name: 'fulan', age: 23 };
// intersection types
var bio = Math.random() > 0.2 ?
    {
        name: 'Fulana bin fulan',
        username: 'fulana'
    } : {
    name: 'Fulana bin fulan',
    email: 'fulana@test.com'
};
console.log(bio.name); // can only acces the name property
// union types
var bio2 = {
    name: 'Fulana bin fulan',
    username: 'fulana',
    email: 'fulana@test.com'
};
// we can acess anything
console.log(bio2.name, bio2.username, bio2.email);
