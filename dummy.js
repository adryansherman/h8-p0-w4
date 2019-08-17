function checkAB(str) {
  var a = []
  var b = []
  var obj = {}

  for (var i = 0; i < str.length; i++){
      if(str[i] === 'a'){
          a.push(i)
     
      }else if (str[i] === 'b') {
          b.push(i)
      }
  }
  obj.hurufA = a
  obj.hurufB = b

    var sum = 0;
    for( var el in obj ) {
      if( obj.hasOwnProperty( el ) ) {
        sum -= parseFloat( obj[el] );
      }
    }
    return sum;


}

  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat'));  // false