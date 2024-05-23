// function play(){
//     let homeSection= document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     let playgroundSection= document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection);
// }

function handleKeyboardKeyUpEvent(event){
    let playerPressed = event.key;
    console.log('Player Pressed',playerPressed);

    // expected key
    let currentAlphabetElement = document.getElementById('current-alphabet');
    let currentAlphabet = currentAlphabetElement.innerText;
    let expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // check matched or not
    if(playerPressed===expectedAlphabet){
        console.log('You get a point');
    }
    else{
        console.log('You missed. Lost a life');
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    let alphabet = getARandomAlphabet();
    console.log(alphabet);

    // set randomly generated alphabet
    let currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}