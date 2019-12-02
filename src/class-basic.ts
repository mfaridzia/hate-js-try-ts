import { hasEmail, hasUsername } from "./basics";

// CLass, implement interface
export class Contact implements hasUsername {
  name: string;
  username: string;
  constructor(name: string, username: string) {
    this.name = name;
    this.username = username;
  }
}

// Access modifier(public, protected, private)
class AccountEmail implements hasEmail {
  constructor(public name: string = 'fulana', public email: string) {
    // write yout code here...
  }
}

// Abstract
abstract class AbstractAccount implements hasEmail, hasUsername {
  public abstract username: string; // must be implemented by other class
  constructor(
    public name: string, 
    public email: string // must be public to satisfy hasEmail
  ) {
    // write your code...
  }
  abstract sendData(): void; // must be implemented by other class
}

// implementation
class CompleteAccount extends AbstractAccount {
  constructor(public username: string, name: string, email: string) {
    super(name, email)
  }

  sendData() {
    console.log("Test send data.....")
  }
}