let inputNum = 20
let num = document.getElementById("num-text")
let len = document.getElementById("len-text")
let vol = document.getElementById("vol-text")
let mass = document.getElementById("mass-text")

function getData() {
    inputNum = document.getElementById("form-input").value
    num.textContent = inputNum // number to be converted  
}

function lenConv() { //length conversion
   feet = (inputNum * 3.2808398950131).toFixed(3) //meter to feet
   meter = (inputNum * 0.3048).toFixed(3) //feet to meter
   
   len.textContent = inputNum + " meters = " + feet + " feet | " + inputNum + " feet = " + meter + " meters"  //output paragraph for length
}

function volConv() { //volume conversion
    gallon = (inputNum * 0.2641729).toFixed(3) //liter to gallon
    liter = (inputNum * 3.7854).toFixed(3) //gallon to litter
    
    vol.textContent = inputNum + " liters = " + gallon + " gallons | " + inputNum + " gallons = " + liter + " liters" //output paragraph for volume
}

function massConv() { //mass conversion
    pound = (inputNum * 2.20462262).toFixed(3) //liter to gallon
    kilo = (inputNum * 0.45359237).toFixed(3) //gallon to litter
    
    mass.textContent = inputNum + " kilos = " + pound + " pounds | " + inputNum + " pounds = " + kilo + " kilos" //output paragraph for mass
}

