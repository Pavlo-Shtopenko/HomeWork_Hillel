function reverse(srs) {
  let result;
  if (typeof srs === "string") {
    result = "";
    for (let i = 0; i < srs.length; i++) {
      result += srs[srs.length - 1 - i];
    }
    return result;
  } else if (typeof srs === "object") {
    result = [];
    for (let i = 0; i < srs.length; i++) {
      result[i] = srs[srs.length - 1 - i];
    }
    return result;
  }
}

function verifyNumbers(srs) {
  let result = [];
  for (let i = 0; i < srs.length; i++) {
    if (typeof srs[i] === "number") {
      result[result.length] = srs[i];
    }
  }
  return result;
}

function getMin(srs) {
  let result = srs[0];
  for (let i = 0; i < srs.length; i++) {
    if (result > srs[i]) {
      result = srs[i];
    }
  }
  return result;
}

function getAverage(srs) {
  let result = 0;
  for (let i = 0; i < srs.length; i++) {
    result += Number(srs[i]);
  }
  result = result / srs.length;
  return result;
}

function getMaxString(srs) {
  let result = "";
  for (let i = 0; i < srs.length; i++) {
    if (result.length < srs[i].length) {
      result = srs[i];
    }
  }
  return result;
}

const utils = {
  reverse: reverse,
  verifyNumbers: verifyNumbers,
  getMin: getMin,
  getAverage: getAverage,
  getMaxString: getMaxString,
};
