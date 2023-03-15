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
  protected _courseCount = 1; //protected can be accessed in the class and child classes not outside of class
  readonly city = "Kopop";
  constructor(public email: string) {}

  //   getters
  get getAppleEmail(): string {
    return "apple@pp.pp";
  }

  get getCourseCount(): number {
    return this._courseCount;
  }
  set setCourseNUmber(courseNumber: number) {
    this._courseCount = courseNumber;
  }
}

const marcin = new User("soul@op.pp");

console.log(marcin.email);
console.log(marcin.getAppleEmail);

// Class extending

class subUser extends User {
  isFAmily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const mumin = new subUser("bb@oo.pp");
mumin.changeCourseCount();
console.log(mumin.getCourseCount);
