const transpose = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];

  for (let j = 0; j < columns; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));

  const horizontalReverse = letters.map((ls) => ls.reverse().join(""));
  const verticalReverse = letters.map((ls) => ls.reverse().join(""));

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      console.log(true);
      return true;
    }
  }
  for (l of verticalJoin) {
    if (l.includes(word)) {
      console.log(true);
      return true;
    }
  }
  for (l of horizontalReverse) {
    if (l.includes(word)) {
      console.log(true);
      return true;
    }
  }
  for (l of verticalReverse) {
    if (l.includes(word)) {
      console.log(true);
      return true;
    }
  }

  console.log(false);
  return false;
};

module.exports = wordSearch;
