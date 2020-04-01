const showHidePrior = document.querySelector(".toggle-priorities")
showHidePrior.addEventListener('click', function(event) {  
    
    const state1 = document.querySelector(".toggle-priorities").innerText = "Show Priorities";
    const state2= document.querySelector(".toggle-priorities").innerText = "Hide Priorities";
if(showHidePrior.innerText == state1){
    showHidePrior = state2 
}
else if (showHidePrior.innerText == state2) {
showHidePrior.innerText = state1
}










