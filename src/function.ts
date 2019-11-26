import { hasEmail, hasUsername } from "./basics";

const dataEmail = {
  name: "fulana",
  email: "fulana@test.com"
}

// function parameters & return values can have type annotations
function sendEmail(to: hasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name} <${to.email}>`, 
    body: "Test email body...."
  };
}
console.log(sendEmail(dataEmail))

function getUsername(user: hasUsername) {
  return {
    user: `${user.name} & ${user.username}`
  };
}
//console.log(getUsername({ name: "fulana2", username: "fulana2@test.com" }))

// return types can almost always be inferred
function getFirstName(bio: { name: string }) {
  const parts = bio.name.split(/\s/g); // split @ 
  if (parts.length < 2) console.log("Error");
  return { // inferred return types
    firstName: parts[0],
  };
}
console.log(getFirstName({ name: "muhfaridzia" }))

// rest parameters must be array
const sumNumber = (...numbers: number[]) => ( numbers.reduce((acc, num) => acc + num ));
console.log(sumNumber(1, 2, 3, 4));

// we can even provide multiple function signatures or overload signatures
function biodata(method: "email", ...people: hasEmail[]): void;
function biodata(method: "username", ...people: hasUsername[]): void;

// function implementation 
function biodata(method: "email" | "username", ...people: (hasEmail | hasUsername)[]): void {
  if (method === "email") {
    (people as hasEmail[]).forEach(sendEmail);
  } else {
    (people as hasUsername[]).forEach(getUsername);
  }
}

// email works
biodata("email", { name: "test", email: "test@test" });
// username works
biodata("username", { name: "test2", username: "test22" });
// mixing username & email error
//biodata("email", { name: "test3", username: "test333" });

// callback function
function callFunc(callback: () => any, delay: number) {
  setTimeout(() => callback(), delay);
}

function callbackParams() {
  console.log("Test.....")
}

callFunc(() => callbackParams(), 2000)