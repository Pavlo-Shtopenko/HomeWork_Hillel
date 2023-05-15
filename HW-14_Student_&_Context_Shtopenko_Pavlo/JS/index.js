function Student(name, faculty, marks) {
  (this.name = name),
    (this.faculty = faculty),
    (this.marks = marks),
    (this.getAvgMark = function () {
      let sumMarks = 0;
      marks.forEach((element) => {
        sumMarks += element;
      });
      console.log(sumMarks / marks.length);
    });
  this.getMedianMark = function () {
    const sortedArrayMarks = marks.slice().sort();
    let indexOfMedian = Math.ceil(marks.length / 2);
    if (marks.length % 2 !== 0) {
      console.log(sortedArrayMarks[indexOfMedian - 1]);
    } else {
      console.log(
        (sortedArrayMarks[indexOfMedian] +
          sortedArrayMarks[indexOfMedian - 1]) /
          2
      );
    }
  };
  this.getMaxMark = function () {
    let maxValue = marks[0];
    marks.forEach(function (element) {
      if (maxValue < element) {
        maxValue = element;
      }
    });
    console.log(maxValue);
  };
  this.getMinMark = function () {
    let minValue = marks[0];
    marks.forEach(function (element) {
      if (minValue > element) {
        minValue = element;
      }
    });
    console.log(minValue);
  };
  this.getTotal = function () {
    let total = marks.reduce((sum, current) => sum + current, 0);
    console.log(total);
  };
  this.getInfo = function () {
    console.log(
      name +
        " " +
        faculty +
        " " +
        marks.reduce((sum, current) => sum + current, 0)
    );
  };
}

// const student1 = new Student('Jack', 'Astronomy', [4,5,4,3,5,3]);
// console.log(student1);
// student1.getAvgMark();
// student1.getMedianMark();
// student1.getMaxMark();
// student1.getMinMark();
// student1.getTotal();
// student1.getInfo();
