const HighPFirst = document.querySelector(".toggle-priorities")
HighPFirst.addEventListener('click', function(event) {  
    
    const state1 = "High Priority First";
    const state2 = "Original Order";
if(HighPFirst.innerText == state1){
    HighPFirst.innerText = state2 
}
else if (HighPFirst.innerText == state2) {
showHidePrior.innerText = state1
}

})