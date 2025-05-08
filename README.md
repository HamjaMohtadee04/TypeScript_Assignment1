"# TypeScript_Assignment1" 

Absolutely! Here's the full `README.md` content ready to **copy and paste** into your project:

````markdown
# 📘 TypeScript Concepts: Improve Code Quality and Maintainability

## ✅ How does TypeScript help in improving code quality and project maintainability?

TypeScript is an object-oriented programming language that is built on top of JavaScript and includes additional functionality. JavaScript misses several of the features that TypeScript offers.

### 🔹 JavaScript Limitations

- JavaScript is a dynamically typed language.
- A variable can hold many data types like a function, number, or object.

```js
// JavaScript example
let a = 10;         // a is a number
a = "abc";          // now a is a string
a = function() {};  // now a is a function
// No error in JavaScript
````

```ts
// TypeScript example
let a: number = 10;
a = "abc";         // ❌ Error: Type 'string' is not assignable to type 'number'
a = function() {}; // ❌ Error: Type '() => void' is not assignable to type 'number'
```

* Type-checking mistakes are not caught until runtime.
* JavaScript does not support object-oriented programming by default.
* Difficult to manage large projects with multiple developers.
* Harder to track bugs and maintain code.

### 🔹 TypeScript Advantages

* Supports targeting older versions (ES3, ES5, ES6, etc.).
* Type safety and static typing.
* Adds support for interfaces, enums, tuples, union & intersection types, etc.
* Increases productivity with intelligent type suggestions.
* Reduces bugs and simplifies testing.

TypeScript improves code quality and makes large-scale project development easier and safer.

---

## ✅ What is Type Inference in TypeScript? Why is it helpful?

**Type inference** means TypeScript automatically figures out the type of a variable even when you don’t explicitly declare it.

```ts
let name = "Alice"; // TypeScript infers this as string
let age = 25;       // Inferred as number
let isAdmin = true; // Inferred as boolean
```

### 🔹 Why it’s helpful:

* Reduces the need to manually specify types.
* Keeps code clean and readable.
* Still provides the benefits of static type checking.
* Catches type errors during development.

It provides flexibility while ensuring safety, making the development experience smoother and more robust.

---

## ✅ Example: Union and Intersection Types in TypeScript

### 🔹 Union Type (`A | B`)

A union type allows a variable or parameter to hold one of several types.

```ts
function showId(id: number | string) {
  console.log("ID:", id);
}

showId(101);      // ✅ OK
showId("A102");   // ✅ OK
```

---

### 🔹 Intersection Type (`A & B`)

An intersection type combines multiple types into one. The resulting type must satisfy all included types.

```ts
type User = {
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "John",
  role: "Manager"
};
```

`AdminUser` must include all properties from both `User` and `Admin`.

---
