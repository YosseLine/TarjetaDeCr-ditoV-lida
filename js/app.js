var tarjet = prompt("Ingrese número de tarjeta");
var newArray = [];
var num = 0;

function isValidCard (tarjet,newArray){
  for(var i=0; i< tarjet.length; i++){
    if(i % 2 === 1 && tarjet.length !== 0){
      num = tarjet.substr(i,1) * 2;
     parseInt(num / 10) + num % 10;
    }
    else{
      alert("Undefined");
    }
    }
    return newArray.push(num);
}

isValidCard(tarjet, newArray);
