const showHidePrior = document.querySelector(".toggle-priorities")
showHidePrior.addEventListener('click', function(event) {  
    
    const state1 = "Show Priorities";
    const state2 = "Hide Priorities";
if(showHidePrior.innerText == state1){
    showHidePrior.innerText = state2
    currentTodos= namesAndPriorities(todos) 
}
else if (showHidePrior.innerText == state2) {
showHidePrior.innerText = state1

}
})








