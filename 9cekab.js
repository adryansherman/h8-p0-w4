function checkAB(str) {
    var hurufA = []
    var hurufB = []
    for (var i = 0; i < str.length; i++){
        if (str[i] === 'a'){
            hurufA.push(i)
        }else if(str[i] === 'b'){
            hurufB.push(i)
        }
    }

    for(var j = 0; j < hurufA.length; j++){
        for (var k = 0; k < hurufB.length; k++){
           if (Math.abs(hurufA[j] - hurufB[k]) > 3){
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
  