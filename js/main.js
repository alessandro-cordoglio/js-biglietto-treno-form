"use strict";

/* creo le variabili */
const user_name = document.getElementById("user_n").value
const journey_km = document.getElementById("journey_km").value
const btn_ticket = document.getElementById("ticket_gen")
const hidden_div = document.querySelector(".hidden__")

let ticket_price = 0.21*journey_km;

/* evento on click */
btn_ticket.addEventListener('click', function(){
    hidden_div.classList.replace("hidden__", "show__")
});

function success() {
    if(document.getElementById("user_n").value==="" || document.getElementById("journey_km").value==="") { 
           document.getElementById('ticket_gen').disabled = true; 
       } else { 
           document.getElementById('ticket_gen').disabled = false;
       }
   }

/* condizione che crea il prezzo scontato */
/* if(user_age<18){
    ticket_price = ticket_price - ((ticket_price*20)/100);
}
else if(user_age>=65){
    ticket_price = ticket_price - ((ticket_price*40)/100);
} */

document.getElementById("traveler_name").innerHTML= user_n 

document.getElementById("carriage").innerHTML= Math.floor(Math.random() * 10) + 1
document.getElementById("cp_code").innerHTML= Math.floor(Math.random() * 9000 + 1000);
