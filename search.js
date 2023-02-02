let searchBtnEl = document.getElementById('searchBtn');
let listEl = document.getElementById('searchcars');
let randCarEl = document.getElementById('randCar');

 

// Event listener 
searchBtnEl.addEventListener('click',find);
randCarEl.addEventListener('click',randomCar)


function find(){
  let searchEl = document.getElementById('searchIn').value;
  searchEl = searchEl.toLowerCase();
 let searchNo = getSearch(cars,searchEl); 
   
 // show the amount of cars in the data structure are the type asked for 
  if (searchNo > 0) {
   listEl.innerHTML = 'There are '+searchNo+' car(s) that fit in the search.<br>This is the result of  search: <br>'
   pasteSearch(cars);
  }else {
     listEl.innerHTML = 'Sadly,the store does not have the type of car you are looking for.'
  }

}

function   getSearch(array,search){
  let numtype = 0;
  //loop through  array looking for number of that type
  for (let i =0;i<array.length;i++){
    if(array[i].type.toLowerCase() == search||array[i].name.toLowerCase() == search||array[i].brand.toLowerCase() == search){
      numtype++;
    }
  }
 return numtype
}


function pasteSearch(array){
  let searchEl = document.getElementById('searchIn').value;
  searchEl = searchEl.toLowerCase();
  // find the types in the array and paste them in the list 
 for (let i=0;i<array.length;i++){
   if (array[i].type.toLowerCase() == searchEl||array[i].name.toLowerCase() == searchEl||array[i].brand.toLowerCase() == searchEl){
     listEl.innerHTML +=   '<img src="img/'+array[i].name+'.jpg"> <br> <p> The name of the car is '+ array[i].name +'. it is priced at '+array[i].price +' and it has a horsepower of '+ array[i].power + ".</p>" ;
   }
 }
}

function randomCar(){
  let rand = randomInt(0,cars.length-1);
     listEl.innerHTML =   '<img src="img/'+cars[rand].name+'.jpg"> <br> <p> The name of the car is '+ cars[rand].name +'. it is priced at '+cars[rand].price +' and it has a horsepower of '+ cars[rand].power + ".</p>" ;
}