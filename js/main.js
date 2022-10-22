"use strict";

/* creo le variabili */
const journey_km = document.getElementById("journey_km").innerHTML
const user_age = document.getElementById("user_age").innerHTML
const btn_ticket = document.getElementById("ticket_gen")
const hidden_div = document.querySelector(".hidden__")

let ticket_price = 0.21*journey_km;

btn_ticket.addEventListener('click', function(){
    hidden_div.classList.replace("hidden__", "show__")
});


/* condizione che crea il prezzo scontato */
/* if(user_age<18){
    ticket_price = ticket_price - ((ticket_price*20)/100);
}
else if(user_age>=65){
    ticket_price = ticket_price - ((ticket_price*40)/100);
}

document.getElementById("ticket_price").innerHTML=`Il prezzo del tuo biglietto è ${ticket_price.toFixed(2)}` */