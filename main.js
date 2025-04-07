let bill = 0
let tipPorcentage = 0
let numberOfPeople = 0
let buttonSelected = noll

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber

    calculateResults()
}

function receiveNumberOfPeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber

    calculateResults()
}

function receiveTipPorcentageValue(value){
    tipPorcentage = value / 100
    removeClassButtonSelected()
    document.querySelector("#custom-tip").value = "";
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")

    calculateResults()
}

function receiveCustomTipPorcentageValue(){
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    removeClassButtonSelected()
    calculateReusults()
}

function removeClassButtonSelected(){
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculateResults(){
    if(bill !== 0 && tipPercentage !== 0 && numberOfPeople !==0){
        let tipAmountPerson = calculateTipAmountPerson()
        calculateTotalPerson()
    }
}

function calculateTipAmountPerson(){
    let tipAmountStrong = document.querySelector(".amount strong")
    let tipAmountPerson = bill * tipPercentage / numberOfPeople 
    totalAmountStrong.textContent = `$${tipAmountPerson.toFixed(2)}`
    return tipAmountPerson
}

function calculateTotalPerson(tipAmountPerson){
    let totalStrong = document.querySelector(".total strong")
    let totalAMountPerson = bill / numberOfPeople + tipAmountPerson
    totalStrong.textContent = `$${tipAmountPerson.toFixed(2)}`
}