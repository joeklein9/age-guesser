const submitBtn = document.getElementById("submit")
const inputField = document.getElementById("input")
let resultsDisplay = document.getElementById("results")



submitBtn.addEventListener("click", getResults)



function getResults() {

fetch (`https://api.agify.io?name=${inputField.value}`)
    .then (response => response.json())
    .then (data => 
        
        resultsDisplay.innerHTML = data.age
        
        
        )


    
}






