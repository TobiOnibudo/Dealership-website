let carinfoEl = document.getElementById('carinfo')
//Event listener 
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu(){
  let selection = document.getElementById('porscheCars').value;

  if (selection == "718 Cayman"){
    carDetails(cars[11]);
  }else   if (selection == "718 Boxster"){
    carDetails(cars[12]);
  }else    if (selection == "Macan"){
       carDetails(cars[13]);
  }else   if (selection == "Cayenne"){
    carDetails(cars[14]);
  }else   if (selection == "Panamera 4"){
    carDetails(cars[15]);
  }
}


function carDetails(array){
  carinfoEl.innerHTML =   '<img src="img/'+array.name+'.jpg"> <br> <p> This model is a '+ array.type +'. It is priced at '+array.price +' and it has a horsepower of '+ array.power + ".</p>" ;
}

