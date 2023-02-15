let check = () =>{
let number = document.getElementById("num").value;

console.log(number);

if(number > 0){
    document.getElementById("answer").innerHTML =number + 
    " არის დადებითი";
}

else if(number < 0){
    document.getElementById("answer").innerHTML =number + 
    " არის უარყოფითი";
}
else{
    document.getElementById("answer").innerHTML =number +
    " არის ნული"
}
}