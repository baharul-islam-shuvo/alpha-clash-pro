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
    // quit the game if player press 'esc'
    if(playerPressed==='Escape'){
        gameOver();
    }
    // expected key
    let currentAlphabetElement = document.getElementById('current-alphabet');
    let currentAlphabet = currentAlphabetElement.innerText;
    let expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // check matched or not
    if(playerPressed===expectedAlphabet){
        console.log('You get a point');

        let currentScore = getElementValueById('current-score');
        let updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);
        // update score
        // 1. get the current score
        // let currentScoreElement=document.getElementById('current-score');
        // let currentScoreText=currentScoreElement.innerText;
        // let currentScore= parseFloat(currentScoreText);
        // console.log(currentScore);
        // let currentScore = getElementValueById('current-score');
        // // 2.increase the score
        // let newScore= currentScore + 1;
        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;
        // // start a new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed. Lost a life');

        let currentLife = getElementValueById('current-life');
        let updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife===0){
            gameOver();
        }
        // //1. get the current life number
        // let currentLifeElement = document.getElementById('current-life');
        // let currentLifeText = currentLifeElement.innerText;
        // let currentLife = parseFloat(currentLifeText);
        // //2. reduce the life
        // let newLife = currentLife - 1;
        // //3. display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    let alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set randomly generated alphabet
    let currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    // reset score
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    let lastScore = getElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);
    // clear the text field
    let currentAlphabet= getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}