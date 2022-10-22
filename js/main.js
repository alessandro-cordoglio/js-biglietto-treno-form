"use strict";

/* creo le variabili */
const user_name = document.getElementById("user_n").value
const journey_km = document.getElementById("km").value
const btn_ticket = document.getElementById("ticket_gen")
const hidden_div = document.querySelector(".hidden__")
const age = document.getElementById("user_age")
const age_value = age.value

let ticket_price = 0.21*journey_km;

/* funzione per lo sconto */
if(age_value=="adult"){
    document.getElementById("discount").innerHTML= `Biglietto Standard`
}
else if(age_value=="old"){
    ticket_price= ticket_price - (ticket_price*0.4)
    document.getElementById("discount").innerHTML= `Sconto Over 65 (40%)`
}
else if(age_value=="minor"){
    ticket_price= ticket_price - (ticket_price*0.2)
    document.getElementById("discount").innerHTML= `Sconto Minorenni (20%)`
}

/* evento on click */
btn_ticket.addEventListener('click', function(){
    hidden_div.classList.replace("hidden__", "show__")
});

/* funziona che controlla che tutti gli elementi di input siano riempiti */
function success() {
    if(document.getElementById("user_n").value==="" || document.getElementById("km").value==="") { 
           document.getElementById('ticket_gen').disabled = true; 
       } else { 
           document.getElementById('ticket_gen').disabled = false;
       }
   }


document.getElementById("traveler_name").innerHTML= user_name 

document.getElementById("carriage").innerHTML= Math.floor(Math.random() * 10) + 1
document.getElementById("cp_code").innerHTML= Math.floor(Math.random() * 9000 + 1000);
document.getElementById("ticket_price").innerHTML= `${ticket_price}`