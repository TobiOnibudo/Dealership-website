let carinfoEl = document.getElementById('carinfo')
//Event listener 
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu(){
  let selection = document.getElementById('BMWCars').value;

  if (selection == "BMW 230i"){
    carDetails(cars[6]);
  }else   if (selection == "BMW 330i"){
    carDetails(cars[7]);
  }else    if (selection == "BMW 430i"){
       carDetails(cars[8]);
  }else   if (selection == "BMW M3"){
    carDetails(cars[9]);
  }else   if (selection == "BMW M8 Cabriolet"){
    carDetails(cars[10]);
  }
}


function carDetails(array){
  
  carinfoEl.innerHTML =   '<img src="../img/'+array.name+'.jpg"> <br> <p> This model is a '+ array.type +'. It is priced at '+array.price +' and it has a horsepower of '+ array.power + ".</p>" ;
}