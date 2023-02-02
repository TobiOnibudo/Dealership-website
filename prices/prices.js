// Global Variable
let priceBtnEl = document.getElementById('priceBtn');
let listEl = document.getElementById('listofcars');
// Event listener
priceBtnEl.addEventListener('click',list);

function list(){
  createList(cars);
}

function createList(array){
  let priceEl = Number(document.getElementById('price').value);
  let status = false;
  listEl.innerHTML = 'These are the cars within the price range: <br>'
  for(let i = 0;i<array.length;i++){
  if (priceEl > array[i].price){
  listEl.innerHTML += '<img src="../img/'+array[i].name+'.jpg"> <br>'+array[i].name +'<p> This model is a '+ array[i].type +'. it is priced at '+array[i].price +' and it has a horsepower of '+ array[i].power + ".</p>" ;
  status = true;
  }
  }
  if (status == false){
    listEl.innerHTML = 'The price range is too low to buy any car available.';
  }
}
