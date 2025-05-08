"# TypeScript_Assignment1" 

## Q:1 How does TypeScript help in improving code quality and project maintainability?
TypeScript is an object-oriented programming language that is built on top of JavaScript and includes additional functionality. JavaScript misses several of the features that TypeScript offers.

# JavaScript Limitations
- JavaScript is a dynamically typed language.
- We can store many data kinds in a single variable, such as a function, number, or object.

```Ts
// JavaScript example
let a = 10;         // a is a number
a = "abc";          // now a is a string
a = function() {};  // now a is a function
// No error in JavaScript
```
```Ts
let a: number = 10;
a = "abc";         //  Error: Type 'string' is not assignable to type 'number'
a = function() {}; //  Error: Type '() => void' is not assignable to type 'number'
```


- We cannot detect type-checking mistakes in large projects.

- It is tough to handle large projects with JavaScript.

- Type-checking errors do not generate a compile-time error in JavaScript,type-checking problems are discovered during runtime.

- By default, JavaScript does not support object-oriented programming (OOP).

- When working on a large application with several developers, it is quite tough to manage a vast codebase.

- Bugs are tougher to locate.

- Errors are frequently detected only during execution.

# TypeScript Advantages
- If there is a need to change or shift to an older version of the project, it is possible in TypeScript (e.g., targeting ES3, ES5, ES6, etc.), but not easily in JavaScript.

- Type safety.

- JavaScript types are supported in TypeScript.

- TypeScript also provides its own types like interface, void, array, enum, intersection, etc.

- Increases productivity by suggesting types.

- Fewer bugs and less testing effort.

While JavaScript is powerful, it has several limitations, especially for large-scale applications. TypeScript addresses those limitations and helps improve both code quality and project maintainability.


---

##  What is Type Inference in TypeScript? Why is it helpful?

**Type inference** means TypeScript automatically figures out the type of a variable even when you don’t explicitly declare it.

```ts
let name = "Alice"; // TypeScript infers this as string implicitly
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

## Q:3 Example of Union and Intersection Types in TypeScript

### 🔹 Union Type (`A | B`)

A union type allows a variable or parameter to hold one of several types.

```ts
function showId(id: number | string) {
  console.log("ID:", id);
}

showId(101);      //print 101
showId("A102");   //print A102
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
};  //print John Manager
```



---
