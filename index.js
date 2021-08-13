// We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

// For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

function isDoubleton(n){
    return [...new Set(n.toString().split(""))].length === 2;
}

function doubleton(num){
   
  return isDoubleton(num+1) ? num+1 : doubleton(num+1);
  
} 

console.log(doubleton(120) === 121);
console.log(doubleton(1234) === 1311);
console.log(doubleton(10) === 12);