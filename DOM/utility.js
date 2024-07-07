function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function ShowElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400');
}


function getARandomAlphabet(){
    //Get or create Alphabet array
       const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
       const alphabets = alphabetString.split('');
    
       //get Random Alphabet
       const randomNumber = Math.random()*25;
       const index = Math.round(randomNumber);
    
       const alphabet = alphabets[index];
       return alphabet;
    }