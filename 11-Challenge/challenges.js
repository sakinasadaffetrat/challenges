/* Challenges to Solve */
/* Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither. */

let arr = [1, 2, 1];
function check(arr){
  if(arr[0] > arr[1] && arr[2] > arr[1]){
    return "decreasing"
  }else if (arr[0] < arr[1] && arr[2] < arr[1]){
    return "increasing"
  }else if (arr[0]=== arr[1] || arr[1]=== arr[2] || arr[0]=== arr[1]) {
    return "neither"
  }
  else {
    return "increasing"
  };
};
console.log(check(arr));
