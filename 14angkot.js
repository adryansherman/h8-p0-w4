function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
   for(var k=0; k<rute.length; k++){
       console.log(rute[k])
   }
    var hasil = [];
    for (var i = 0; i<arrPenumpang.length; i++){
        console.log(arrPenumpang[i])
        for (var j=0; j<rute.length; j++){
            console.log(rute[j])
            if(arrPenumpang[i][1] !== rute[j] || arrPenumpang[i][2] !== rute [j]){
                return 'rute diluar trayek'
            }else{
                var titikNaik = rute.indexOf(arrPenumpang[i][1])
                var titikTurun = rute.indexOf(arrPenumpang[i][2])
                var distance = Math.abs(titikTurun - titikNaik)
                var obj = {}
                obj.penumpang = arrPenumpang[i][0]
                obj.naikDari = arrPenumpang[i][1]
                obj.tujuan = arrPenumpang[i][2]
                obj.bayar = 2000*distance
                hasil.push(obj)
               
            }
            
            
        }
    
    }
    return hasil 
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
  console.log(naikAngkot([['Dimitri', 'F', 'G'], ['Icha', 'D', 'A']]));
