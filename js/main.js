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

//Validazione input
var numbers = /^[0-9999999999]+$/;

if(età.match(numbers)) {
 alert("Età correttamente inserita");
} else {
  alert("ATTENZIONE:Inserisci un'età in valori numerici");
}

if(km.match(numbers)) {
  alert("Km correttamente inseriti");
 } else {
   alert("ATTENZIONE:Inserisci i Km in dati numerici");
   document.getElementById('prezzo').innerHTML=("Inserisci i dati correttamente" ); 
 }


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
 
