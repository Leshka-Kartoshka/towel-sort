// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(matrix == undefined){
    return [];
  }
  var final2D = [];
  for (var i = 0; i < matrix.length; i++) {
    while (true) {
      var changes = 0;
      for (var j = 0; j < matrix[i].length; j++) {
        if (i % 2 == 0) {
          if (matrix[i][j] > matrix[i][j + 1]) {
            var buffer = matrix[i][j];
            matrix[i][j] = matrix[i][j + 1];
            matrix[i][j + 1] = buffer;
            changes++;
          }
        } else {
          if (matrix[i][j] < matrix[i][j + 1]) {
            var buffer = matrix[i][j];
            matrix[i][j] = matrix[i][j + 1];
            matrix[i][j + 1] = buffer;
            changes++;
          }
        }
      }
      if (changes == 0) {
        break;
      }
    }
    final2D = [...final2D, matrix[i]];
  }
  var final = [];
  for (var i = 0; i < final2D.length; i++) {
    final = [...final, ...final2D[i]]
  }
  return final;
}
