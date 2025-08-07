/*
Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give a solutions to this problem, using arrays
*/
const distinctSum = (setOne, setTwo) => {
  let sum = 0;
  {
    setOne.forEach((element) => {
      if (!setTwo.includes(element)) {
        sum += element;
        console.log(element);
      }
    });
    setTwo.forEach((element) => {
      if (!setOne.includes(element)) {
        sum += element;
        console.log(element);
      }
    });
  }
  return sum;
};
console.log(distinctSum([3, 1, 7, 9], [2, 4, 1, 9, 3]));
