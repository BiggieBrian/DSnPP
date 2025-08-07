/*
You are asked to write an algorithm that fulfill the following: 

    Name: Dot product
    Description:

    Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
    Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
    Modify the previous algorithm if you use a dot_product function instead of a procedure.

*/

const dotProduct = (V1, V2) => {
  return (ps = V1[0] * V2[0] + V1[1] * V2[1]);
};
const orthogonal = (arr) => {
  answers = [];
  for (i = 0; i < arr.length; i++) {
    element = arr[i];
    for (j = 0; j < arr.length; j++) {
      n = arr[j];
      if (dotProduct(element, n) == 0) {
        console.log(`pair: [${element}] and [${n}]`);
      }
    }
  }
};
const raw = [
  [1, 0],
  [0, 1],
  [1, 2],
  [2, -1],
  [-2, -5],
];
console.log(orthogonal(raw));
