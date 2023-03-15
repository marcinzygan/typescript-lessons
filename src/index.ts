// TYPESCRIPT LESSONS

// CLASSES

class User {
  email: string;
  name: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const marcin = new User("soul@22.op", "soul");

console.log(marcin.email);
