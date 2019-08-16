function ubahHuruf(kata) {
    var ubah = ''
    var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (var i = 0; i < kata.length; i++){
      for(var j = 0; j < huruf.length; j++){
        if(kata[i] === huruf[j]){
          ubah += huruf[j+1]
        } else if (kata[i] === 'z'){
          ubah += 'a'
          break;
        }
          
      }
    }
    return ubah
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('sssssemangat')); // tfnbohbu
  console.log(ubahHuruf('zzzzzz')); 
  console.log(ubahHuruf('zola')); 
