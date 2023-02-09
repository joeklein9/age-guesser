const submitBtn = document.getElementById("submit")
const inputField = document.getElementById("input")
let resultsDisplay = document.getElementById("results")



submitBtn.addEventListener("click", getResults)



function getResults() {

fetch (`https://api.agify.io?name=${inputField.value}`)
    .then (response => response.json())
    .then (data => {
    
        if (data.age !==null) {
        resultsDisplay.innerHTML = `Your age is likely: ${data.age}`
        }
        
        
    })


    inputField.value = ""
    
}






