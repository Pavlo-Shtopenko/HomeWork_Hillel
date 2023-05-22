
class Person{
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  welcome(name, surname){
    console.log(`Hi! I'm ${this.name} ${this.surname}`);
  }
}

class Student extends Person{
  constructor(name, surname, faculty, marks){
    super(name, surname);
    this.faculty = faculty;
    this.marks = marks;
  }
  getAvgMark() {
    let sumMarks = 0;
    this.marks.forEach((element) => {
      sumMarks += element;
    });
    return(sumMarks / this.marks.length);
  };
  getMedianMark() {
    const sortedArrayMarks = this.marks.slice().sort();
    let indexOfMedian = Math.ceil(this.marks.length / 2);
    if (this.marks.length % 2 !== 0) {
      return(sortedArrayMarks[indexOfMedian - 1]);
    } else {
      return(
        (sortedArrayMarks[indexOfMedian] +
          sortedArrayMarks[indexOfMedian - 1]) /
          2
      );
    }
  };
  getMaxMark() {
    let maxValue = this.marks[0];
    this.marks.forEach(function (element) {
      if (maxValue < element) {
        maxValue = element;
      }
    });
    return(maxValue);
  };
  getMinMark() {
    let minValue = this.marks[0];
    this.marks.forEach(function (element) {
      if (minValue > element) {
        minValue = element;
      }
    });
    return(minValue);
  };
  getTotal() {
    let total = this.marks.reduce((sum, current) => sum + current, 0);
    return(total);
  };
  getInfo() {
    return(this.name + " " + this.faculty + " " + this.marks.reduce((sum, current) => sum + current, 0)
    );
  };
}

class Headman extends Student{
  constructor(name, surname, faculty, marks){
    super(name, surname, faculty, marks)
  }
  defendGroup(){
    return("This is my group. I'm their hero!");
  }
}

// const person =new Person('John', 'Smith');
// const student = new Student ('jon', 'smot', 'philology', [40,50,90,10,2]);
// const headman = new Headman ('Bruce', 'Smith', 'some-faculty', [20,60,80,10,4]);