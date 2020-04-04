const showHideLp = document.querySelector(".hide-low-priority")
showHideLp.addEventListener('click', function(event) {  
    
    const state1 = "Show Low Priority";
    const state2 = "Hide Low Priority";
if(showHideLp.innerText == state1){
    showHideLp.innerText = state2 
}
else if (showHideLp.innerText == state2) {
showHideLp.innerText = state1
}

})