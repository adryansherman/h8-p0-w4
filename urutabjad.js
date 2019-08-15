function urutkanAbjad(str) {
    //return str.split('').sort().join('')
    var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var ubah = '';
    for (var i = 0; i < huruf.length; i++){
        for(var j = 0; j < str.length; j++){
            if(huruf[i] === str[j]){
                ubah += str[j]
            }
        }
    }
    return ubah 
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
console.log(urutkanAbjad('zaky'));
console.log(urutkanAbjad('zpmebueergrg'));





