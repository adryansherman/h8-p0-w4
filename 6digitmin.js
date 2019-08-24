function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var digit=0
    var tampung=[]
    for(var i=1; i<=angka; i++){
        if(angka % i==0){
            tampung.push(i)
            //console.log(tampung)
        }
    }
    var tengah=tampung.length/2
    if(tampung.length > 1){
        digit=String(tampung[tengah])+String(tampung[tengah-1])
        //console.log(digit)    
    }else{
        digit=String(tampung[0])+String(tampung[0])
        
    }
    return digit.length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2


