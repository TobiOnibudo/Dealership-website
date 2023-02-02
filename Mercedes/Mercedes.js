let carinfoEl = document.getElementById('carinfo')
//Event listener 
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu(){
  let selection = document.getElementById('mercedesCars').value;

  if (selection == "A-class Sedan"){
    carDetails(cars[0]);
  }else   if (selection == "C-class Sedan"){
    carDetails(cars[1]);
  }else    if (selection == "E-class Sedan"){
       carDetails(cars[2]);
  }else   if (selection == "S-class Sedan"){
    carDetails(cars[3]);
  }else   if (selection == "C-class Wagon"){
    carDetails(cars[4]);
  }else if (selection == "E-class Wagon"){
    carDetails(cars[5]);
  }
}


function carDetails(array){
  carinfoEl.innerHTML =   '<img src="../img/'+array.name+'.jpg"> <br> <p> This model is a '+ array.type +'. It is priced at '+array.price +' and it has a horsepower of '+ array.power + ".</p>" ;
}

