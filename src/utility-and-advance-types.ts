// Utility Types(Partial, Pick, Readonly, ReturnType, Omit, Exclude, etc)
interface MyData {
  name: string
  age: number
}

// Partial
function updateData(data: MyData, updateFields: Partial<MyData>) {
  return { ...data, ...updateFields }
}
updateData({ name: 'arum', age: 21 }, {
  name: 'Arum!'
});

// Readonly
const myData2: Readonly<MyData> = {
  name: 'arum', age: 21
}
// myData2.age = 20; -> error: cannot reassign a readonly property

// Advance types
interface MyRandomData {
  username: { name: string, username: string }
  email: { name: string, email: string }
  phone: { phoneNumber: number }
}
// Transform key into value
function randomData<T extends keyof MyRandomData>(type: T, data: MyRandomData[T]) {
  console.log(data);
}
randomData('username', { name: 'arum', username: 'arum123' });
randomData('email', { name: 'arum', email: 'arum@test.com' });
randomData('phone', { phoneNumber: 081234567 });