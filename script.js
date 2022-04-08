const firstSection = document.querySelector("section:first-child");
const secSection = document.querySelector("#sec-section");
const p = document.querySelector("#sec-section div:nth-child(2) p");
secSection.style = "display: none";
let value;

function option(button){
    value = button.value;
}

function submit(){
    if(value){
        firstSection.style = "display: none";
        p.innerHTML = `You selected ${value} out of 5`;
        secSection.style = "display: true";
    }else{
        alert("Select a option before submit")
    }
}