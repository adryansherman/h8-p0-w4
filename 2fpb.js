function fpb(angka1, angka2){
    if(angka1=== 0 || !angka1 || angka2 === 0 || !angka2){
        return 'invalid input'
    }
    while (angka1 !== angka2){
        if( angka1 > angka2){
            angka1 = angka1 - angka2;
        } else{
            angka2 = angka2 - angka1; 
        }
    }
   var hasil = angka1;
   return hasil
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23));
console.log(fpb(0,0)) // 1
console.log(fpb(4,0))
console.log(fpb(0,6))
console.log(fpb(4))
