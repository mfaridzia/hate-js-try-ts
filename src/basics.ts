/* 
  Basics TypeScript
*/

// Variables
let txt: string = "Hello World!";

let num: number = 1;
console.log(num)

num = 2;
console.log(num) 

const num2: number = 10;
console.log(num2)

// Simple Array
const numbers: string[] = ['10', '20', '30'];
console.log(numbers);

// tuple, fixed length
let dataTest: [number, number, string] = [1, 2, 'test'] // error -> dataTest = ['test', 2, 2];

// Object
let biodata: { name: string; age: number} = {
  name: 'Fulana',
  age: 20
}
/* errror -> 
  biodata = {
    name: 'fulana' 
  }
*/
console.log(biodata);

// optional operator 
let biodata2: { name: string; age?: number} = { // age is optional
  name: 'Fulana'
}

// reuse type using interface
interface IBiodata {
  name: string;
  age: number;
} 

let biodata3: IBiodata = { name: 'fulan', age: 23 };

// Union & Intersection
export interface hasUsername {
  name: string
  username: string
}

export interface hasEmail {
  name: string
  email: string
}

// union types
let bio: hasUsername | hasEmail = Math.random() > 0.2 ?
  {
    name: 'Fulana bin fulan',
    username: 'fulana'
  } : {
    name: 'Fulana bin fulan',
    email: 'fulana@test.com'
  };
console.log(bio.name) // can only acces the name property

// intersection types
let bio2: hasUsername & hasEmail =  {
  name: 'Fulana bin fulan',
  username: 'fulana',
  email: 'fulana@test.com'
}
// we can acess anything
console.log(bio2.name, bio2.username, bio2.email)