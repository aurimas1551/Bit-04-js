const valiuta = 'EUR';
const prekes = [
    {
        name: 'Bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Agurkas',
        price: 3,
        inStock: 10
    },
    {
        name: 'Pomidoras',
        price: 1.57,
        inStock: 30
    },
];

function shop(prekes, valiuta) {
    let shopText = "";
    let sum = 0;
    for(let i = 0; i < prekes.length; i++){
        sum += prekes[i].price * prekes[i].inStock;
        shopText += `${i+1}) ${prekes[i].name} kainuoja ${prekes[i].price} ${valiuta} ir turime ju ${prekes[i].inStock} vienetu\n`
    }

    console.log("MUSU PARDUOTUVE:");
    console.log("----------------");
    console.log(shopText);
    console.log("----------------");
    console.log(`Viso asortimento kaina: ${sum} ${valiuta}.`);

}

shop(prekes, valiuta);
