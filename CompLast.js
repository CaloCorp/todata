const completeLast = document.querySelector(".complete-last")
completeLast.addEventListener('click', function(event) {  
    
    const state1 = "Complete Last";
    const state2 = "Original Order";
if(completeLast.innerText == state1){
    completeLast.innerText = state2 
}
else if (completeLast.innerText == state2) {
completeLast.innerText = state1
}

})