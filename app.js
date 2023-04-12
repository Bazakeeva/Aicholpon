
var user= {
    name: 'Starbucks',
    phoneNumber: 97430174797,
    phoneNumber2: null,
    address: {
        city: 'Qatar',
        street: undefined,
    },
    menu: {
        coffee: 'Espresso',
        coffee2: 'Latte',
        coffee3: 'Cappucino',
        coffee4: 'Americano',
    },
    menu2: {
        tea: 'ice Tea',
        tea2: 'Mint Tea',
        tea3: 'Green Tea',
        tea4: 'Grey Tea',
    },


}
console.log(user)
console.log(user.name)
console.log(user.address.city)
console.log(user.menu)
console.log(user.menu2)

var Coffe = prompt ('Which coffee would you like to order?')
var Tea = prompt('Which tea would you like to order?')
if  ((Coffe ==='latte') ||(Coffe==='Espresso')||(Coffe==='Cappucino')||(Coffe==='Americano')){
    console.log('order')
}
else {
    alert('error')
}
if ((Tea ==='ice Tea')||(Tea==='Mint Tea')||(Tea==='Green Tea')||(Tea==='Grey Tea')) {
    console.log('order')}
else{
    alert('error')
}






