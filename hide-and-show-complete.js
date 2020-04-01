const showHideComplete = document.querySelector(".hide-low-priority")
showHideComplete.addEventListener('click', function(event) {  
    
    const state1 = "Hide Complete";
    const state2 = "Show Complete";
if(showHideComplete.innerText == state1){
    showHideComplete.innerText = state2 
}
else if (showHideComplete.innerText == state2) {
showHideComplete.innerText = state1
}

})