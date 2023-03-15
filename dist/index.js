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
        this._courseCount = 1; //protected can be accessed in the class and child classes not outside of class
        this.city = "Kopop";
    }
    //   getters
    get getAppleEmail() {
        return "apple@pp.pp";
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseNUmber(courseNumber) {
        this._courseCount = courseNumber;
    }
}
const marcin = new User("soul@op.pp");
console.log(marcin.email);
console.log(marcin.getAppleEmail);
// Class extending
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFAmily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const mumin = new subUser("bb@oo.pp");
mumin.changeCourseCount();
console.log(mumin.getCourseCount);
