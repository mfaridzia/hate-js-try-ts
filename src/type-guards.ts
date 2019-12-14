// Type assertion
const str: string = "hello world!";
const num: number = (<string>str).length;
// or, equivalent with
const num2: number = (str as string).length;

/* 
  - Top types = any & unknown -> can hold any value
  - Bottom Types = never -> can hold no value
*/
const myData: any = "hello";
// const myData2: unknown = "test";
// const myData3: never = "never..";

// Type guards
if(typeof myData === 'string') {
  myData.substring(1, 3);
}

if(myData instanceof Promise) {
  myData.then(d => console.log(d));
}

// create type guards
interface IParams {
  value: string
}
function guardTypeStr(p: any): p is IParams {
  return typeof p.value === 'string';
}

if (guardTypeStr("test")) {
  console.log("Ok, string")
}