//USER INPUTS
const colorModeSwitch = document.getElementById('color-mode-switch')
let inputNumber = document.getElementsByClassName('input')[0].value
const convertBtn = document.getElementById('convert-btn')

//ACCESS TO MODIFY HTML
const modeText = document.getElementById('mode-text')
const lengthConversionEL = document.getElementById('length-conversions-el')
const volumeConversionEl = document.getElementById('volume-conversions-el')
const massConversionEl = document.getElementById('mass-conversions-el')

//ACCESS TO CSS FOR TOGGLE ANIMATION
const toggleSwitch = document.getElementById('toggle-switch')
const circle = document.getElementById('circle')

//ACCESS TO CSS FOR COLOR MODE CHANGE
const mainContainer = document.getElementsByClassName('main-container')[0]
const mainCard = document.getElementsByClassName('main-card')
const mainUnitH2 = document.getElementsByClassName('main-unit-h2') 
const conversionP = document.getElementsByClassName('conversion-p')

//CONVERSIONS
const meterToFeet = 3.281
const literToGallons = 0.264
const kilogramToPounds = 2.204

//EVENT LISTENERS
colorModeSwitch.addEventListener('click', isToggled)

convertBtn.addEventListener('click', () =>{
    inputNumber = document.getElementsByClassName('input')[0].value
    unitConversion(inputNumber, meterToFeet, lengthConversionEL, 'meters', 'feet')
    unitConversion(inputNumber, literToGallons, volumeConversionEl, 'liters', 'gallons')
    unitConversion(inputNumber, kilogramToPounds, massConversionEl, 'kilograms', 'pounds')
})

function unitConversion(input, conversionNumber, element, unitAString, unitBString){
    let unitA = Number(input * conversionNumber).toFixed(3)
    let unitB = Number(input / conversionNumber).toFixed(3)

    element.textContent = `${inputNumber} ${unitAString} = ${unitA} ${unitBString} | ${inputNumber} ${unitBString} = ${unitB} ${unitAString}`

}

//SET INITIAL COLOR MODE
isToggled = false

function isToggled(){
    isToggled =  !isToggled
  
    if(isToggled){
        //TOGGLE SWITCH ANIMATION AND COLOR CHANGE
        toggleSwitch.style.backgroundColor = 'var(--clr-primary-dark-900)' 
        circle.style.transform = 'translatex(22px)'
        //TEXT CHANGE
        modeText.textContent = "Dark Mode"
        //COLOR MODE CHANGE
        mainContainer.style.backgroundColor = 'var(--clr-primary-dark-900)'
        for(let i = 0; i < mainCard.length; i++){
            mainCard[i].style.backgroundColor = 'var(--clr-primary-dark-600)'
            mainUnitH2[i].style.color = 'var(--clr-primary-dark-300)'
            conversionP[i].style.color = 'var( --clr-light-800)'
        }
    }
    else{
         //TOGGLE SWITCH ANIMATION AND COLOR CHANGE
        toggleSwitch.style.backgroundColor = 'var(--clr-primary-dark-300)'
        circle.style.transform = 'translatex(0px)'
        //TEXT CHANGE
        modeText.textContent = "Light Mode"
        //COLOR MODE CHANGE
        mainContainer.style.backgroundColor = 'var(--clr-light-800)'
        for(let i = 0; i < mainCard.length; i++){
            mainCard[i].style.backgroundColor = 'var(--clr-light-900)'
            mainUnitH2[i].style.color = 'var(--clr-primary-light-100)'
            conversionP[i].style.color = 'var( --clr-grey-300)'
        }
         
    }
  }


