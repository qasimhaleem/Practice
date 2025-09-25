console.log("Hello world");
let value = 10;
console.log(value);
// alert("Hello world")
// window.alert("Hello world")

console.log(`this the valuse of ${value}`);

if(value>10) {
    console.log("the value is greater then 10");
}else {
    console.log("value are equall to 10/ less");
}

const mars = 94;
if(mars>=90) {
    console.log("You Got A+");
}
else if(mars>=80 && mars<90) {
    console.log("You got b+");
} 
else if(mars>=70 && mars<80) {
    console.log("You got c+");
}
else {console.log("You are failed")};

const tem = 14;
if(tem<=20) {
    console.log("Its too cold outside");
}
else if(tem<=30 && tem>20) {
    console.log("its a little clod like in december");
}
else if(tem>=30 && tem<40) {
    console.log("it normal temprature outside");
}
else {
     console.log("there are sever heat outstide");
}

const num = 9;
num>=50 ? console.log("you were passed"): console.log("you are faild");

const data = 70;
(data <= 20 ? console.log("fail") : (data<=50 && data>20 ? console.log("passe"):console.log("Topper"))); 


const form = 110;
switch(form) {
    case 10:
        console.log("You have form of 10 Rupees");
        break;
    case 20:
        console.log("You have form of 20 Rupees");
        break;
    case 30:
        console.log("you have form of 30 Rupees");
        break;
    case 40:
        console.log("you have form of 40 Rupees");
        break;
    default : 
        console.log("You are not eligeble");
    }

