let http = require("http");

// Interface 1

interface IBook {
  readonly author: string;
  pages?: number;
  published?: Date;
  title: string;
}

function readBookTitle(book: IBook) {
  if (book.published) {
    return (
      book.title +
      ", by " +
      book.author +
      ", publiced " +
      book.published?.toDateString()
    );
  } else {
    return book.title + ", by " + book.author;
  }
}

let book1: IBook = {
  author: "Peter Jackson",
  pages: 200,
  published: new Date(),
  title: "Everything is FINE",
};

console.log(readBookTitle(book1));

// Assignment C
/*
Q: Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
A: You don't have to make a class that have all the properties of the interface object, just and object with all the same properties.
The logic of the naming of this convension is: "If it walks like a duck, talks like a duck, then we can treat it as a duck"
An exsample of this is shown in the assignement D below
*/

// Assignment D
console.log(readBookTitle({ author: "Jack Peterson", title: "A Blank Slate" }));

// Assignemnt E
// book1.author = ""; // <-- Typescript will have an error here

// Assignment F

class BookTypeA implements IBook {
  readonly author: string;
  pages?: number;
  published?: Date;
  title: string;

  constructor(author: string, title: string, published: Date, pages: number) {
    this.author = author;
    this.title = title;
    if (published) this.published = published;
    if (pages) this.pages = pages;
  }
}

// Interface 2

interface myFunc {
  (s1: string, s2: string, s3: string): Array<string>;
}

let bFunction: myFunc;
let cFunction: myFunc;

bFunction = function(s1, s2, s3){
  return [s1, s2, s3];
}

cFunction = function(s1, s2, s3){
  return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
}

let f2 = function logger(f1: myFunc){
  //Simulate that we get data from somewhere and uses the provided function
  let [ a, b, c] = ["a", "b", "c"];
  console.log(f1(a,b,c));
}

f2(bFunction);
f2(cFunction);

function otherFunction(n1: number, n2: number, n3: number){
  return [n1, n2, n3]
}

//f2(otherFunction)// <-- Typescript will have an error here