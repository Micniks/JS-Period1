var http = require("http");
function readBookTitle(book) {
    var _a;
    if (book.published) {
        return (book.title +
            ", by " +
            book.author +
            ", publiced " + ((_a = book.published) === null || _a === void 0 ? void 0 : _a.toDateString()));
    }
    else {
        return book.title + ", by " + book.author;
    }
}
var book1 = {
    author: "Peter Jackson",
    pages: 200,
    published: new Date(),
    title: "Everything is FINE"
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
var BookTypeA = /** @class */ (function () {
    function BookTypeA(author, title, published, pages) {
        this.author = author;
        this.title = title;
        if (published)
            this.published = published;
        if (pages)
            this.pages = pages;
    }
    return BookTypeA;
}());
var bFunction;
var cFunction;
bFunction = function (s1, s2, s3) {
    return [s1, s2, s3];
};
cFunction = function (s1, s2, s3) {
    return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["a", "b", "c"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(bFunction);
f2(cFunction);
