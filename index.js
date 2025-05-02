// javascript

// empty array to store chores added by user 
let chores = []

let addChore = document.getElementById("addchore")
let inputField = document.getElementById("inputfield")
let choreList = document.getElementById("chorelist")
let clearChores = document.getElementById("clearchores")
let storedChores = JSON.parse(localStorage.getItem("chores"))


// when arrow button clicked, run the add chore function 
addChore.addEventListener("click", addToChores)

if (storedChores) {
    chores = storedChores
    renderChoreList()
}
function addToChores() {
    if (inputField.value) {
        chores.push(inputField.value)
        inputField.value =""
        localStorage.setItem("chores", JSON.stringify(chores))
        renderChoreList()
    }
    
}

function renderChoreList () {
    // empty strong to hold list items 
    let choreItems = ""
    //loop through the array which is empty until something is pushed to it by clicking the arrow button
    for (let i = 0; i< chores.length; i++){
    //store the chore from the array, in the empty list, as a list item. This allows all list items to be in one place to minimize DOM manipulation 
    choreItems += `<li>${chores[i]}</li>`
    }
    // update the HTML with the list items
    choreList.innerHTML = choreItems
}

// when the x button is clicked, run the function to clear 
clearChores.addEventListener("click", clearChoreList)

function clearChoreList() {
    //set the array back to empty 
    chores = []
    //call the function to discplay the list items, should be empty becuase the array is empty 
    renderChoreList()
    //clear the storage so old tasks wont show up constantly 
    localStorage.clear()
}