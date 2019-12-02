import { hasEmail, hasUsername } from "./basics";

// Type alias
type NumOrStr = number | string;
type NameType = { name: string };

// Type: Self referencing types
type NumberValue = 1 | 2;

// type
type Account2 = (contact: hasEmail | hasUsername, msg: string) => void;

// Interface can extend from other interface
export interface HasEmailAndPhone extends hasEmail {
  phoneNumber: number;
}

// interface and call/index signature
interface Account {
  (contact: hasEmail | hasUsername, msg: string): void;
}