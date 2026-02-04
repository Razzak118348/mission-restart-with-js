const tax=4000;
let eta =28;
eta =20;

//default parameter
function add(num1 , num2=0){
    return num1+num2;
}

//template string
const dynamicText=`The tax is ${tax} and the sum is ${add(10,20)}`;
