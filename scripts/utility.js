function hideElementById(elementId){
    let element= document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    let element= document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    let element= document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    let element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
    let element = document.getElementById(elementId);
    let elementValueText = element.innerText;
    let value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId , value){
    let element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    let element =document.getElementById(elementId);
    let text = element.innerText;
    return text;
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