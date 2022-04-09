const firstContainer = document.querySelector(".container:first-child");
const secondContainer = document.getElementById("sec-section");
const ratingResult = document.querySelector("#sec-section .card div:first-child");
const ratingBtns = document.getElementsByClassName("rating-btn");
const submitBtn = document.getElementById('submit')
secondContainer.style = "display: none";
let value;

function handler(e){
    value = e.currentTarget.value;
}

function submit(){
    if(value){
        firstContainer.style = "display: none";
        const content = `<div><p id="rating-result-content">You selected ${value} out of 5</p></div>`
        ratingResult.insertAdjacentHTML('beforeend', content);
        secondContainer.style = "display: true";
    }else{
        alert("Please select a option before click submit button")
    }
}


for(i of ratingBtns){
    i.addEventListener('click', handler);
}

submitBtn.addEventListener('click', submit);