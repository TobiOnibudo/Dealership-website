let garageTableEl = document.getElementById('garageTable')
let revealBtn = document.getElementById('revealBtn')
let garage = localStorage.getItem('inventory')
let newgarage =  JSON.parse(garage);

// event listener
revealBtn.addEventListener('click',revealGarage);

function revealGarage(){
  // show garage
  if (newgarage != null){
  garageTableEl.innerHTML = 'These are the cars you have bought from our store <br>'
  for (let i = 0;i<newgarage.length;i++){
  garageTableEl.innerHTML += '<table><tr><td>Name:'+newgarage[i].name+'</td><td><h2> Car </h2> <img src="../img/'+newgarage[i].name+'.jpg"> <p> you bougth '+newgarage[i].number+' of these at the time of your purchase</p></td></tr></table>'
  }
  }else {
    garageTableEl.innerHTML = 'You currently have no car in your garage'
  }
}
