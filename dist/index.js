"use strict";
// TYPESCRIPT LESSONS
// CLASSES
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Kapop";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     console.log(this.city);
//   }
// }
// const marcin = new User("soul@22.op", "soul");
// console.log(marcin.email);
// console.log(marcin.city); cannot access city beecause its privete it can only be accessed inside of the class
// ANOTHER WAY OF WRITING THE CLASS
class User {
    constructor(email) {
        this.email = email;
        this.city = "Kopop";
    }
}
const marcin = new User("soul@op.pp");
console.log(marcin.email);
