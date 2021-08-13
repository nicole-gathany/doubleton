function isDoubleton(n){
    return [...new Set(n.toString().split(""))].length === 2;
}

function doubleton(num){
   
  return isDoubleton(num+1) ? num+1 : doubleton(num+1);
  
} 