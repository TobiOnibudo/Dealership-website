// Global variables 
let nameBtnEl = document.getElementById('nameBtn');
let carInfoEl = document.getElementById('carInfo');
let accountBalance = localStorage.getItem('Balance');
let purchaseEl = document.getElementById('purchase');
let garageEl = document.getElementById('garage');
let garageBtnEl = document.getElementById('garagebtn');
let quizEl = document.getElementById('quiz');
let status = false;
let carPrice = 0;
let carObject = [];
let carDetails;



// event listener 
// find the car 
if (nameBtnEl != null){
nameBtnEl.addEventListener('click',findCar);
}
if (garageBtnEl != null){
garageBtnEl.addEventListener('click',addToGarage);
}





function findCar(){
  let carNameEl = document.getElementById('carName').value;
  carNameEl =  carNameEl.toLowerCase() 
  // find the name of car entered 
  for (let i = 0;i<cars.length;i++){
    // check if car found 
    if (carNameEl == cars[i].name.toLowerCase()){
      status = true;
      carInfoEl.innerHTML = '<img src="img/'+ cars[i].name+'.jpg"> <br> <p> .The price of this car is  '+ cars[i].price +' and  you currently have '+accountBalance+' in your account</p>'
      createBtn('Buy')
      carPrice = cars[i].price;
      carDetails = cars[i] ;
  }
  }
  if (status == false){
    // if not output this 
    carInfoEl.innerHTML = 'Sorry but the name of the car entered is not within our collection.I hope you can check our brands to find a car to your liking '
  }
}

function createBtn(text){
  // set a condition for the button to be made
  if (status = true){
  purchaseEl.innerHTML = '';
  let btn = document.createElement('BUTTON');
  btn.innerHTML = text;
  btn.setAttribute('class','buyButton');
  purchaseEl.appendChild(btn);
  // creating event listener to run purchase function
 btn.onclick = function (){ purchaseCar()};
  }
}

function purchaseCar(){
  console.log(carDetails)
 if (accountBalance >= carPrice ){
    if (carObject == ''){ 
   carObject.push(carDetails)
   } else {
     // check if carDetails is within the carObject
   for (let i = 0;i<carObject.length;i++){
   if (carObject[i] != carDetails){
     // if carDetails is not within carObject at the time of purchase then add 
    carObject.push(carDetails)
   } else if(carObject[i] == carDetails){
     //if carDetails is within
     carObject[i].number++;
   }
   }
   }
    //  buy car if money available is enough 
    accountBalance -= carPrice;
    carInfoEl.innerHTML  = 'The purchase was successful hope you enjoy your new ride and your current account balance is '+ accountBalance+'.' 
    purchaseEl.innerHTML = '';
    localStorage.setItem('Balance',accountBalance);
    // display garage button 
    garageEl.setAttribute('style','display:inline');

 }else{
   // if balance will enter the negatives then output this 
    carInfoEl.innerHTML  = 'Sorry but you currently have insufficient funds please try our quiz section to get some more funds.'
    purchaseEl.innerHTML = '';
 }
}



function addToGarage(){
  // if car has been bought before do not add  
  if (localStorage.getItem('inventory') != null){
    let currentGarage = localStorage.getItem('inventory');
    let newcurrentGarage = JSON.parse(currentGarage);
   for (let i = 0;i < carObject.length;i++){
    // add all the things in the previous garage
    console.log(carObject[0])
    newcurrentGarage.splice(0,0,carObject[i]);
   }
   // Then make newcurrentGarage be the CarObject that will be added to garage
    carObject = newcurrentGarage;
  }
  // add car to garage
    var JSONReadyUsers = JSON.stringify(carObject)
    localStorage.setItem('inventory',JSONReadyUsers)
    var inventory = JSON.parse(localStorage['inventory'])
}