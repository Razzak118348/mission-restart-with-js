//callback
function goodMorning(name){
    console.log(`Good Morning ${name}`);
}
function raju(calBack,name){
    console.log("Raju is calling the callback function");
    calBack(name);
    if(name==="Raju"){
        console.log("Raju is present");
    }
}
raju(goodMorning,"Raju");