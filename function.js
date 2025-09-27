/* function data(name, funCallBac) {
    console.log(name);
    funCallBac();
}
function another() {
    console.log(" We welcome you here")
}

data("qasim", another)
 */
/* 
function person(name,age) {
    this.name = name;
    this.age = age;
}
const data = new person("Qasim",22);
console.log(data.name);
console.log(data.age); */



/* function ban(name,id,balance,expiryDate) {
    this.balance = balance;
    this.id = id;
    this.name = name;
    this.expiryDate = expiryDate;
}
const records = new ban("Qasim",2830284,298402385284,2030);
console.log(records.name);
console.log(records.id);
console.log(records.balance);
console.log(records.expiryDate); */

/* function* name() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = name();
console.log(gen.next().value);
console.log(gen.next().value);
 */
/* 
function* messileAttac() {
    yield "Ababeel Messile Lunch";
    yield "Shaheen-3 Lunch";
    yield "Shaheen-O3_mini Lunch";
}

const attac = messileAttac();
console.log(attac.next().value);
console.log(attac.next().value);
console.log(attac.next().value); */

/* async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data =  response.json;
    console.log(data);
} */

/* async function fetchData() {
    let response =await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
}
fetchData(); */

/* async function dataa() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data = await response.json();
    console.log(data.body);
}
dataa(); */


