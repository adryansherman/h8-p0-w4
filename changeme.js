/*function changeMe(arr) {
    var data = {}
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            data[arr[i][0]].FirstName
            console.log(data)
 // }
  
  // TEST CASES
  //changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  //changeMe([]); // ""
  */

 arr = [['Christ', 'Evans', 'Male', 1982]]
  var data = {}
  for(var i = 0; i < arr.length; i++){
        data[arr[i]]
        console.log(data);
}