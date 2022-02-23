var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__inp");
var elSelect = document.querySelector(".form__sel");
var elOption = document.querySelector(".form__option");
var elResult = document.querySelector(".result");

var UZS = 10910.00;
var RUBL = 160.00;
var EURO = 12800.00;

elForm.addEventListener("submit", function(event){
event.preventDefault();

var elInputVal = elInput.value;
var elSelectVal = elSelect.value;
var elResMul = elInputVal * elSelectVal;

elResult.textContent = (`${elResMul}`);

if (elInputVal < 0 ){
    elResult.textContent = ("Please write again we can't convert it !!!")
}

})