"use strict";
exports.__esModule = true;
var dataEmail = {
    name: "fulana",
    email: "fulana@test.com"
};
// function parameters & return values can have type annotations
function sendEmail(to) {
    return {
        recipient: to.name + " <" + to.email + ">",
        body: "Test email body...."
    };
}
console.log(sendEmail(dataEmail));
function getUsername(user) {
    return {
        user: user.name + " & " + user.username
    };
}
//console.log(getUsername({ name: "fulana2", username: "fulana2@test.com" }))
// return types can almost always be inferred
function getFirstName(bio) {
    var parts = bio.name.split(/\s/g); // split @ 
    if (parts.length < 2)
        console.log("Error");
    return {
        firstName: parts[0]
    };
}
console.log(getFirstName({ name: "muhfaridzia" }));
// rest parameters must be array
var sumNumber = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return (numbers.reduce(function (acc, num) { return acc + num; }));
};
console.log(sumNumber(1, 2, 3, 4));
// function implementation 
function biodata(method) {
    var people = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        people[_i - 1] = arguments[_i];
    }
    if (method === "email") {
        people.forEach(sendEmail);
    }
    else {
        people.forEach(getUsername);
    }
}
// email works
biodata("email", { name: "test", email: "test@test" });
// username works
biodata("username", { name: "test2", username: "test22" });
// mixing username & email error
//biodata("email", { name: "test3", username: "test333" });
// callback function
function callFunc(callback, delay) {
    setTimeout(function () { return callback(); }, delay);
}
function callbackParams() {
    console.log("Test.....");
}
callFunc(function () { return callbackParams(); }, 2000);
