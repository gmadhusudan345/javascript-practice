//event listener
var h1 = document.querySelector("h1");
var btn = document.querySelector("#btn");
var inputText1 = document.querySelector("#input-text1");
var inputText2 = document.querySelector("#input-text2");

var sumNumber = inputText1 + inputText2;
btn.addEventListener("click", function(){
    var num1 = Number(inputText1.value);
    var num2 = Number(inputText2.value);

    console.log(h1.innerHTML);
    h1.innerHTML = num1 + num2;
    sumNumber.value = "";
    console.log(h1.innerHTML);
});