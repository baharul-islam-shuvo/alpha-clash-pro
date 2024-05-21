function hideElementById(elementId){
    let element= document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    let element= document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    let alphabetString= 'abcdefghijklmnopqrstuvwxyz';
    let alphabets= alphabetString.split('');

    // get a random number
    let randomNumber= Math.random()*25;
    let index= Math.round(randomNumber);

    let alphabet= alphabets[index];
    return alphabet;
}