// Global variables 
let submitAnsEl = document.getElementById('submitAns');
let nextEl = document.getElementById('next');
let totalEl = document.getElementById('total');
let questionEl = document.getElementById('question');
let total = 0;
let newQues = 0;
let newtotal = 0;

// Event listener
if(submitAnsEl != null){
  submitAnsEl.addEventListener('click',checkAnswers)
}
if(nextEl != null){
  nextEl.addEventListener('click',nextQuestion)
}

function checkAnswers(){
  // input for answer defined once more
   let ansEl = document.getElementById('answer');
  // first clear localStorage
    localStorage.clear();
 // return result of the quiz
  totalEl.innerHTML = ' this is the amount of money you have won $'+nextQuestion()+' You answered '+total+' questions correctly';
  setBalance();
  // send a message to user
  questionEl.innerHTML = 'You are done with the quiz';
  submitAnsEl.setAttribute('style','display:none');
  nextEl.setAttribute('style','display:none');
  ansEl.setAttribute('style','display:none');
}

function setBalance(){
  let newtotal1 = nextQuestion();
  // add the new Balance onto the localStorage so it can be accessed on another page
  localStorage.setItem('Balance',newtotal1);
  }
function nextQuestion(){
  // defining the answer as a variable this point 
  let ansEl = document.getElementById('answer').value;
  // condition to change to next question
  questionEl.innerHTML = questions[newQues];
  if (newQues < questions.length){
  questionEl.innerHTML = questions[newQues];
  }else if (newQues >= questions.length){
     // if there is no next question dislay done
     questionEl.innerHTML = 'You are done with the quiz';
  }
  // check if answers are correct
  if (newQues == 0){
    newQues++;
    if (ansEl.toLowerCase() == 'buggati'){
     total  ++;
     newtotal += 100000; 
    } 
  }else if (newQues == 1){
   newQues++;
 if (ansEl.toLowerCase() == 'germany'){
     total  ++;
     newtotal += 100000; 
    } 
  }else if (newQues == 2){
    newQues++;
    if (ansEl.toLowerCase() == 'ford mustang'){
     total  ++;
     newtotal += 100000; 
    }  
  }else if (newQues == 3){
    newQues++;
   if (ansEl.toLowerCase() == 'honda accord'){
     total  ++;
     newtotal += 100000; 
    } 
  }else if (newQues == 4){
    newQues++;
   if (ansEl.toLowerCase() == 'chevrolet impala' ){
     total  ++;
     newtotal += 100000; 
    } 
  }else if (newQues == 5){
    newQues++;
   if (ansEl.toLowerCase() == 'koenigsegg regera' ||ansEl.toLowerCase() == 'buggati chiron'  ){
     total  ++;
     newtotal += 100000; 
    } 
  }else if (newQues == 6){
    newQues++;
   if (ansEl.toLowerCase() == 'horse'){
     total  ++;
     newtotal += 100000;
    } 
  }else if (newQues == 7){
    newQues++;
   if (ansEl.toLowerCase() == 'thrust ssc'){
     total  ++;
     newtotal += 100000; 
    } 
  }else if (newQues == 8){
    newQues++;
   if (ansEl.toLowerCase() == 'model t'){
     total  ++;
     newtotal += 100000; 
    } 
  }else if (newQues == 9){
    newQues++;
   if (ansEl.toLowerCase() == 'ralph teetor'){
     total  ++;
     newtotal += 100000; 
    } 
  }
  return newtotal
}