function shoppingTime(memberId, money) {
    if (memberId === '' || !memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money === '' || !money) {
        return 'Mohon maaf, uang tidak cukup'
    } else if (money < 5e4) {
        return 'Mohon maaf, masukkan jumlah uang Anda'
    }
    var pricelist = [['sepatu stacattu',15e5], ['baju zoro', 5e5], ['baju h&n', 25e4], ['sweater uniklooh', 175e3], ['casing hp',5e4]]
    var objek = {}
    var belanjaan = []
    var tagihan = 0
    for (var i=0; money>=5e3 && i<pricelist.length; i++) {
        if (money >= pricelist[i][1]) {
            belanjaan.push(pricelist[i][0])
            tagihan += pricelist[i][1]
        }
    }
    objek['memberId'] = memberId
    objek['money'] = money
    objek['listPurchased'] = belanjaan
    objek['changeMoney'] = money - tagihan
    return objek
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
console.log(shoppingTime('abcd1234',''));
console.log(shoppingTime('abcd123',10000000));