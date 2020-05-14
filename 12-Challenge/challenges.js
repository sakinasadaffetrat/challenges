/* Challenges to Solve */
/* Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value. */

function equal(a,b,c){
  if(a===b && b===c){
    return 3;
  }else if (a===b || b===c || a===c){
    return 4;
  }else {
    return 3;
  };
};
console.log(equal(3,4,3));