function angkaPrima(angka){
    for(var i = 2; i < angka; i++ ){
        if(angka % i === 0){
            return false;
        }
    }
return angka > 1
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(43)); // false
console.log(angkaPrima(2)); // false
console.log(angkaPrima(3)); // false
console.log(angkaPrima(4)); // false
console.log(angkaPrima(1)); // false