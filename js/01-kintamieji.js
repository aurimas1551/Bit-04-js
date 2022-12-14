console.log("Kintamuju inicijavimas");
console.log("1.---------------");
const skaicius1 = 10;
console.log(skaicius1);
const skaicius2 = 11;
console.log(skaicius2);
const skaicius3 = 12;
console.log(skaicius3);

console.log("2.---------------");
const tekstas1 = "labas";
console.log(tekstas1);
const tekstas2 = "labas23";
console.log(tekstas2);
const tekstas3 = "labas345";
console.log(tekstas3);

console.log("3.---------------");
const sarasas1 = [1,2,3,4,5];
console.log(sarasas1);
const sarasas2 = [12,24,35,46,57];
console.log(sarasas2);
const sarasas3 = [21,32,43,54,65];
console.log(sarasas3);

console.log("4.---------------");
const sarasasTeksto1 = ["a","b","c","d","e"];
console.log(sarasasTeksto1);
const sarasasTeksto2 = ["aawd","bdgf","cwr","dse","ebvc"];
console.log(sarasasTeksto2);
const sarasasTeksto3 = ["ass","bss","css","dss","ess"];
console.log(sarasasTeksto3);

console.log("Veiksmai su kintamaisiais");
console.log("1.---------------");
const sumNumbers = skaicius1 + skaicius2 + skaicius3;
console.log(sumNumbers);

console.log("2.---------------");
const sumText = `${tekstas1} ${tekstas2} ${tekstas3}`;
console.log(sumText);

console.log("3.---------------");
const sumSarasas = sarasas1[0] - sarasas1[1] + sarasas1[2] - sarasas1[3] + sarasas1[4];
console.log(sumSarasas);

console.log("4.---------------");
const sumSarasasText = `${sarasasTeksto3[4]}, ${sarasasTeksto3[3]}, ${sarasasTeksto3[2]}, ${sarasasTeksto3[1]}, ${sarasasTeksto3[0]}`;
console.log(sumSarasasText);

console.log("Kintamuju palyginimas");
console.log("1.---------------");
if(skaicius1 > skaicius2){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(skaicius1 < skaicius2){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(skaicius1 === skaicius2){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(skaicius1 != skaicius2){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(skaicius1 >= skaicius2){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(skaicius1 <= skaicius2){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

console.log("2.---------------");
console.log(tekstas1.length);
console.log(tekstas2.length);
console.log(tekstas3.length);

console.log("3.---------------");
if(tekstas1.length > tekstas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(tekstas1.length < tekstas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(tekstas1.length === tekstas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(tekstas1.length != tekstas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(tekstas1.length >= tekstas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(tekstas1.length <= tekstas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

console.log("4.---------------");
console.log(sarasas1.length);
console.log(sarasas2.length);
console.log(sarasas3.length);
console.log(sarasasTeksto1.length);
console.log(sarasasTeksto2.length);
console.log(sarasasTeksto3.length);

console.log("5.---------------");
if(sarasas1.length > sarasas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(sarasas1.length < sarasas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(sarasas1.length === sarasas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(sarasas1.length != sarasas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(sarasas1.length >= sarasas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}

if(sarasas1.length <= sarasas2.length){
    console.log("Pomidoras")
} else {
    console.log("Bandykite kita karta.")
}