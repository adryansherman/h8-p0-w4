function checkAB(str) {
    var A = []
    var B = []
    for (var i=0; i<str.length; i++) {
        if (str[i] === 'a') {
            A.push(i)
        } else if (str[i] === 'b') {
            B.push(i)
        }
    }
    for (var j=0; j<A.length; j++) {
        for (var k=0; k<B.length; k++) {
            if  (Math.abs(A[j]-B[k]) > 3) {
               return true
           }
        }
    }
    return false
    
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat'));  // false
  

 //if (str.indexOf('a') === -1 || str.indexOf('b') === -1){return false;}


