const bintang = (n) => {
  for (i = 0; i < n; i++) {
    console.log(" ".repeat(i), "* ".repeat(n - i));
    // if (i === n - 1) {
    //   for (j = n - 2; j >= 0; j--) {
    //     console.log(" ".repeat(j), "* ".repeat(n - j));
    //   }
    // }
  }
  for (j = n - 2; j >= 0; j--) {
    console.log(" ".repeat(j), "* ".repeat(n - j));
  }
};

console.log(bintang(5));
console.log(bintang(3));

// NOTASI ALGORITMA

//Read Input
// FOR idx LESS THAN input THEN 
//   DISPLAY " " TIMES idx and "* " TIMES (Input minus idx)
//   INCREMENT idx by 1
// ENDFOR
//
// FOR jdx EQUALS to Input MINUS 2 and jdx BIGGER THAN 0 THEN 
//   DISPLAY " " TIMES jdx and "* " TIMES (Input minus jdx)
//   DECREMENT idx by 1
// ENDFOR
