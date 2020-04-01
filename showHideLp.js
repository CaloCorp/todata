const showHideLp = document.querySelector(".hide-complete")
showHideLp.addEventListener('click', function(event) {  
    
    const state1 = "Show Low Priorities";
    const state2 = "Hide Low Priorities";
if(showHideLp.innerText == state1){
    showHideLp.innerText = state2 
}
else if (showHideLp.innerText == state2) {
showHideLp.innerText = state1
}

})