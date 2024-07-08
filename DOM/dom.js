function play(){
    hiddenElementById('home-screen')
    ShowElementById('play-ground')
    setTextElementById('current-life', 5)
    setTextElementById('current-score', 0)
    continueGame();
    
}




function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    console.log(alphabet);
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet)
}


document.addEventListener('keyup', function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }


    const currentAlphabetElement =document.getElementById('current-alphabet') ;
    const currentAlphabet = currentAlphabetElement.innerText;


    const expectedAlphabet = currentAlphabet.toLowerCase();
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementTextById('current-score');
        const newScore = currentScore+1;
        setTextElementById('current-score',newScore)

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed');
        const currentLife = getTextElementTextById('current-life');
        const newLife = currentLife-1;
        setTextElementById('current-life',newLife);
        if(newLife === 0){
            gameOver()
        }
    }

})

function gameOver(){

        hiddenElementById('play-ground');
        ShowElementById('final-score');
        //update final score
        const lastScore = this.getElementById('current-score');
        setTextElementById('last-score', lastScore);

        const currentAlphabet =getElementById('current-alphabet')
        removeBackgroundColorById(currentAlphabet)
    }
