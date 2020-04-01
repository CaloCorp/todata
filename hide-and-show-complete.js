const showHideComplete = document.querySelector(".hide-low-priority")
showHideComplete.addEventListener('click', function(event) {  
    
    const state1 = "Hide Low Priority";
    const state2 = "Show Low Priority";
if(showHideComplete.innerText == state1){
    showHideComplete.innerText = state2 
}
else if (showHideComplete.innerText == state2) {
showHideComplete.innerText = state1
}

})