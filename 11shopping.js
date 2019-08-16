function shoppingTime(memberId, money) {
    if (memberId === '' || memberId === undefined) {//kalo memberId kosong atau undefined
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money === '' || money === undefined || money < 50000) { //kalo uang kosong atau undefined atau < 50000
        return 'Mohon maaf, uang tidak cukup'
    } 

    var obj = {} //buat obj baru
    var beli = [] //tampung beli apa aja
    var bill = 0 //counter buat bill
    var sale = [['Sepatu Stacattu',1500000], ['Baju Zoro', 500000], ['Baju H&M', 250000], ['Sweater Uniklooh', 175000], ['Casing Handphone',50000]]

    for (var i = 0; i < sale.length; i++) {
        if (money >= sale[i][1]) {
            beli.push(sale[i][0])
            bill += sale[i][1]
        }
    }
    var kembalian = money - bill

    obj.memberId = memberId
    obj.money = money
    obj.listPurchased = beli
    obj.changeMoney = kembalian
    return obj
        
    
 
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
