let obj = {
  a: "f",
  b: 78,
  c: "R",
  d: {
    a: {
      a: null,
      b: "E",
      c: {
        a: true,
        b: "C",
        c: "test",
      },
      d: "U",
    },
    b: {
      a: "R",
      b: ["S", 4, 6, "I"],
      c: 0,
    },
    c: ["O"],
    d: null,
    e: "N",
  },
};

let ourString = "";

let toStringAllUpperCase = function (object) {
  for (let objValue of Object.values(object)) {
    if (typeof objValue === "string") {
      if (objValue === objValue.toUpperCase()) {
        ourString += objValue;
      }
    } else if (Array.isArray(objValue)) {
      objValue.forEach(function (item) {
        if (typeof item === "string") {
          if (item === item.toUpperCase()) {
            ourString += item;
          }
        }
      });
    } else {
      if (typeof objValue === "object" && objValue !== null) {
        toStringAllUpperCase(objValue);
      }
    }
  }
  return ourString;
};

console.log(toStringAllUpperCase(obj));
