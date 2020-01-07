var digitalGeld = document.querySelector('#digitalGeld')
var geld = document.querySelector('#geld')
var zahl = document.querySelector('#zahl')
var result = document.querySelector('#result')
var button = document.querySelector("button")
var myPrice
button.addEventListener("click", function () {
    
 fetch('https://api.cryptonator.com/api/full/' + digitalGeld.value.toLowerCase() + '-' + geld.value.toLowerCase())
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson)
            myPrice = myJson.ticker.price
            result.value=Number((zahl.value)*myPrice).toFixed(2)
        });

        
        
})





