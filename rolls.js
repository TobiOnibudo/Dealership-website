let carinfoEl = document.getElementById('carinfo')
//Event listener 
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu(){
  let selection = document.getElementById('rollsCars').value;

  if (selection == "Phantom"){
    carDetails(cars[21]);
  }else   if (selection == "Ghost"){
    carDetails(cars[22]);
  }else    if (selection == "Wraith"){
       carDetails(cars[23]);
  }else   if (selection == "Dawn"){
    carDetails(cars[24]);
  }else   if (selection == "Cullinan"){
    carDetails(cars[25]);
  }
}


function carDetails(array){
  carinfoEl.innerHTML =   '<img src="img/'+array.name+'.jpg"> <br> <p> This model is a '+ array.type +'. It is priced at '+array.price +' and it has a horsepower of '+ array.power + ".</p>" ;
}

