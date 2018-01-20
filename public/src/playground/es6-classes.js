class Person{
    //constructor
    constructor(name='Anonymous',age=20) {
        this.name = name;
        this.age=age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}. I am ${this.age} year old`;
    } 

    getDescritption(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}


class Student extends Person{
  constructor(name,age,major) {
      super(name,age);
    this.major=major;
  }

  hasMajor() {
      return !!this.major;
  }
  getDescritption(){
    return `testing`;
}
}

class Traveller extends Person{
    constructor(name,age,homelocation) {
        super(name,age);
      this.homelocation=homelocation;
    }
  
    hasMajor() {
        return !!this.major;
    }
    getGreeting(){
        if(this.homelocation === '' || this.homelocation === undefined){
      return super.getGreeting();
        }
      else{
        return super.getGreeting()+`. My location is ${this.homelocation}`;
      }
  }
  }

const me = new Student('keshav',26,'Conmputer Science');
console.log('has major '+me.getDescritption());

const other = new Student();
console.log('has major '+other.getDescritption());

const traveller = new Traveller('keshav',26,'India');
console.log(traveller.getGreeting());
