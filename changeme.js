function changeMe(arr) {
    for(var i = 0; i < arr.length; i++){
        var data = {}
        data.firstName = arr[i][0]
        data.lastName = arr[i][1]
        data.gender = arr[i][2]
        data.age = arr[i][3]
            if(arr[i][3] > 2019 || !arr[i][3]){
                data.age = 'Invalid Birth year'
            }else{
                data.age = 2019 - arr[i][3]
            }
        console.log(data)
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
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


