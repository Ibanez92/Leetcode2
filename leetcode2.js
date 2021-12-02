// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
var isPalindrome = function (x) {
  let numberArr = x.toString().split("");
//   let numberRevArr = numberArr.reverse()
  console.log(numberArr);
//   for (let i = 0; i < numberArr.length; i++) {
    if (numberArr === numberArr.reverse()) 
      console.log("true");
    
    
//   }
};
isPalindrome(121);
