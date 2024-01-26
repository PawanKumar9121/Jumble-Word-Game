let wordText = document.querySelector(".word");
let inputField = document.querySelector("input");
let refreshBtn = document.querySelector(".refresh-word");
let checkBtn = document.querySelector(".check-word");
let contentBox = document.querySelector(".content");
let startArea = document.querySelector(".startArea");
let resultContent = document.querySelector(".result-content");

let result = document.getElementById("myresult");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let resultText = document.getElementById("resultText");

let start = () => {
    contentBox.style.display = "block";
    startArea.style.display = "none";

    Game(); 
}
let Game = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}

let checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(userWord !== correctWord) { 
        result.style.display = "block";
        return resultText.innerHTML = `Oops! ${userWord} is not a correct word`;
    }
    else
    {
    result.style.display = "block";
    resultText.innerHTML = `Congrats! ${correctWord.toUpperCase()} is the correct word`;
    }
    Game();
}

refreshBtn.addEventListener("click", Game);
checkBtn.addEventListener("click", checkWord);

span.onclick = function(){
    result.style.display = "none";
}