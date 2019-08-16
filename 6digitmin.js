/*function digitPerkalianMinimum(angka) {
    var tampung = []
    for(var i = 1; i < angka-1; i++){
        if(angka[i]*angka[i+1] === angka){
            tampung.push(angka[i]*angka[i+1])
            console.log(tampung)

        }
    }
  }
  */
  
  // TEST CASES
  /*console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  */

angka = 12

for(var i = 0; i < angka; i++){
    if(angka[i]* angka[i+1] === angka)
    console.log(angka[i]* angka[i+1])
}