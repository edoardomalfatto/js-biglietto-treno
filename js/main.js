var km
km=prompt("Quanti km vuoi percorrere?");
console.log(km);

var età
età=prompt("Quanti anni hai?");
console.log(età);

const PrezzoAlKm=0.21
const ScontoMinorenni=0.8
const ScontoAnziani=0.4

var prezzo=Math.round((prezzo + Number.EPSILON) * 100) / 100;



if (età < 18) {
    prezzo = (km * PrezzoAlKm * ScontoMinorenni );
  } else if (età > 65) {
    prezzo = (km * PrezzoAlKm * ScontoAnziani)
  } else {
    prezzo = (km * PrezzoAlKm );
  } 
  
  var PrezzoApprossimato=Math.round((prezzo + Number.EPSILON) * 100) / 100;
  
  document.getElementById('prezzo').innerHTML=("Devi sganciare " + (PrezzoApprossimato) + " €" ); 
 
 