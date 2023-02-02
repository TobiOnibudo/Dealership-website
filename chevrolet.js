let carinfoEl = document.getElementById('carinfo')
//Event listener 
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu(){
  let selection = document.getElementById('chevroletCars').value;

  if (selection == "Malibu"){
    carDetails(cars[16]);
  }else   if (selection == "Camaro"){
    carDetails(cars[17]);
  }else    if (selection == "Corvette"){
       carDetails(cars[18]);
  }else   if (selection == "Spark"){
    carDetails(cars[19]);
  }else   if (selection == "Blazer"){
    carDetails(cars[20]);
  }
}


function carDetails(array){
  carinfoEl.innerHTML =   '<img src="img/'+array.name+'.jpg"> <br> <p> This model is a '+ array.type +'. It is priced at '+array.price +' and it has a horsepower of '+ array.power + ".</p>" ;
}

