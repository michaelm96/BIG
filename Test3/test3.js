const pohonAngka = (n) => {
  let newStr = "";

  for (let index = 1; index <= n; index++) {
    newStr += index;
  }
  // to make string from 1 to n
  for (let ind = n - 1; ind > 0; ind--) {
    newStr += ind;
  }
  // to concatanate previous string from (n - 1) to 1

  let newArr = newStr.split("");
  // split the modified string into array

  for (let k = 1; k <= n; k++) {
    let arrBaru = [];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] > k) {
        arrBaru.push(" ");
      } else {
        arrBaru.push(newArr[i]);
      }
      // any number less than or equal to index k would be pushed to new array as it is
    }
    console.log(arrBaru.join(""));
  }

  //Reverse Looping
  for (let k = n - 1; k > 0; k--) {
    let arrBaru = [];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] > k) {
        arrBaru.push(" ");
      } else {
        arrBaru.push(newArr[i]);
      }
    }
    console.log(arrBaru.join(""));
  }
};

console.log(pohonAngka(5));
