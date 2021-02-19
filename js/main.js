"use strict"

//Tutte le variabili
var km;
var età;
var prezzo;


//Tutte le costanti
const PrezzoAlKm=0.21;
const ScontoMinorenni=0.8;
const ScontoAnziani=0.4;


//Prompt - Richieste all'utente
km=prompt("Quanti km vuoi percorrere?");
console.log(km);

età=prompt("Quanti anni hai?");
console.log(età);


//Calcolo prezzo per età
if (età < 18) {
    prezzo = (km * PrezzoAlKm * ScontoMinorenni );
  } else if (età > 65) {
    prezzo = (km * PrezzoAlKm * ScontoAnziani)
  } else {
    prezzo = (km * PrezzoAlKm );
  } 
  
//Calcolo prezzo finale-approssimato
var PrezzoFinale=Math.round((prezzo + Number.EPSILON) * 100) / 100;
  
//Inietto risultato nell'HTML
document.getElementById('prezzo').innerHTML=("Devi sganciare " + (PrezzoFinale) + " €" ); 
 
 