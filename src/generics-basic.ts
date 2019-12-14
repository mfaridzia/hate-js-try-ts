// Params determnine return type of T
interface GenericValue<T> {
  value: T
}
const ArrValue: GenericValue<string[]> = { value: ['one', 'two'] };
console.log(ArrValue.value);

// Type parameters can have default type
interface FilterValue<T = any> {
  (val: T): boolean
}
const filterValue: FilterValue<number> = val => typeof val === 'number';
// filterValue("wkwkw") -> error
filterValue(1) // ok

const randomType: FilterValue = val => val;
randomType("test"); //ok
randomType(100); //ok
randomType(true); //ok

// Promise function
function promiseFunction<T>(promise: Promise<T>, val: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const rejectTask = setTimeout(() => reject("End..."), val);

    promise.then(value => {
      clearTimeout(rejectTask); // cancel timeout
      resolve(value);
    });
  });
}
promiseFunction(fetch(""), 2000);