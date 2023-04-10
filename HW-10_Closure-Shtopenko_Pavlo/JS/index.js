// --- STACK ---
function createStack() {
  let array = [];
  return {
    push: function (data) {
      return array.push(data);
    },
    pop: function (data) {
      return array.pop(data);
    },
    getStack: () => array,
  };
}
// const stack = createStack();



// // --- фильтрация isBetween(min, max) ---

function isBetween(min, max) {
  if (min >= max) {
    return function () {
      console.log("wrong arguments");
    };
  }
  return function (element) {
    if (element >= min && element <= max) {
      return true;
    }
  };
}
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween(3, 6))



// calculate(operation)(a)(b)

function calculation(operator) {
  return function (a) {
    return function (b) {
      switch (operator) {
        case "+":
          return a + b;
          break;
        case "-":
          return a - b;
          break;
        case "*":
          return a * b;
          break;
        case "/":
          return a / b;
          break;
        case "pow":
          return a ** b;
          break;
      }
    };
  };
}

// calculation('pow')(2)(3)



// ----  sortByField(fieldName, sortType)   ----
const products = [
  { name: "Product 1", quantity: 10, price: 25 },
  { name: "Product 2", quantity: 3, price: 55 },
  { name: "Product 3", quantity: 22, price: 35 },
];
function sortByField(fieldName, sortType) {
  return function (a, b) {
    if (a[fieldName] > b[fieldName]) {
      if (sortType === "asc") {
        return 1;
      } else if (sortType === "desc") {
        return -1;
      }
    } else if (a[fieldName] < b[fieldName]) {
      if (sortType === "asc") {
        return -1;
      } else if (sortType === "desc") {
        return 1;
      }
    } else {
      return 0;
    }
  };
}

// products.sort(sortByField('quantity', 'desc');
