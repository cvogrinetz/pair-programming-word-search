const transpose = function (matrix) {
  // Put your solution here
  let arr = [];
  if (matrix.length === 0) {
    return;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    let newArr = [];
    for (let j = 0; j < matrix.length; j++) {
      newArr.push(matrix[j][i]);
    }
    arr.push(newArr);
  }
  return arr;
};

// const printMatrix = (matrix) => {
//     for (const row of matrix) {
//       for (const el of row) {
//         process.stdout.write(el + " ");
//       }
//       process.stdout.write('\n')
//     }
//   }

//   printMatrix(transpose([
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4]
//   ]));

//   console.log('----')

//   printMatrix(transpose([
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ]));

//   console.log('----')

//   printMatrix(transpose([
//     [1, 2, 3, 4, 5, 6, 7]
//   ]));


  module.exports = {
    transpose
  };