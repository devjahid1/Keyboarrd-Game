function continueGame(){
    //Generate Random Alphabet
    const alphabet = getARandomAlphabet();

    // Set Random Alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet

    //Set background color
    setBackgroundColorById(alphabet)
}


function play(){
    hiddenElementById('home-screen');
    ShowElementById('play-ground');
    continueGame();
}
