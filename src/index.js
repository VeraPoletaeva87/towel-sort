
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    let res = [];
    for (let i=0; i< matrix.length; i++) {
        if (i === 0 || i%2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                res.push(matrix[i][j]);
            }
        } else {
            let j = matrix[i].length-1;
            while (j >= 0) {
                res.push(matrix[i][j]);
                j--;
            }
        }
    }
  return res;
}
