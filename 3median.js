function cariMedian(arr) {
     var halfLength = Math.floor(arr.length/2); //karena nilai median ada ditengah kumpulan nilai(yang sudah diurutkan) ambil bagi panjang array untuk penanda lokasi nilai median

    if(arr.length % 2 === 0){ //kalo panjang array genap
        return (arr[halfLength] + arr[halfLength-1])/2; 
    } else {
        return arr[halfLength]; //kalo panjang array ganjil
    }   
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5


  