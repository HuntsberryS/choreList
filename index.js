// javascript

// empty array to store chores added by user 
let chores = []

let addChore = document.getElementById("addchore")
let inputField = document.getElementById("inputfield")
let choreList = document.getElementById("chorelist")
// when arrow button clicked, run the add chore function 
addChore.addEventListener("click", addToChores)

function addToChores() {
    chores.push(inputField.value)
    inputField.value =""
    localStorage.setItem("chores", JSON.stringify(chores))
    console.log( localStorage.getItem("chores") )
    
    let storedChores = JSON.parse(localStorage.getItem("chores"))
    console.log(storedChores)
    
    renderChoreList()
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

