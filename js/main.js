/*

Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

*/


const distanzaDom = document.getElementById('distanza');
const distanzaInserita = distanzaDom.value;

const etaDom = document.getElementById('eta');
const etaInserita = etaDom.value;

const buttonDom = document.querySelector('#leggi-form');

buttonDom.addEventListener('click', 
  function () {

    console.log('Distanza inserita ' + distanzaInserita);
  
    console.log('Età inserita ' + etaInserita);
  }
);


/*

const distance = parseInt(prompt('Inserisci la distanza che vuoi percorrere (km)'));
console.log('Distanza: ' + distanza);

const eta = parseInt(prompt('Inserisci la tua età'));
console.log('Età: ' + eta);

let prezzoAlKm = 0.21;

let prezzoBigliettoBase = prezzoAlKm * distanza;
prezzoBigliettoBase = prezzoBigliettoBase.toFixed(2);
console.log('Prezzo biglietto normale: ' + prezzoBigliettoBase);

let scontoGiovani = (prezzoBigliettoBase / 100) * 20;
console.log('Sconto giovani: ' + scontoGiovani);

let scontoAnziani = (prezzoBigliettoBase / 100) * 40;
console.log('Sconto anziani: ' + scontoAnziani);

let bigliettoGiovani = prezzoBigliettoBase - scontoGiovani;
bigliettoGiovani = bigliettoGiovani.toFixed(2);

let bigliettoAnziani = prezzoBigliettoBase - scontoAnziani;
bigliettoAnziani = bigliettoAnziani.toFixed(2);


if (eta < 18) {
  document.getElementById('prezzo-viaggio').innerHTML = 'Il prezzo è di € ' + bigliettoGiovani + '<p>Hai uno sconto del 20% perché sei minorenne!</p>';
  
} else if (eta > 65) {
  document.getElementById('prezzo-viaggio').innerHTML = 'Il prezzo è di € ' + bigliettoAnziani + '<p>Hai uno sconto del 40% perché sei over 65!</p>';

} else {
  document.getElementById('prezzo-viaggio').innerHTML = 'Il prezzo è di € ' + prezzoBigliettoBase;
 
}

*/



/*
if (eta < 18) {
  risultato = prezzoBigliettoBase - scontoGiovani;
} else if (eta > 65) {
  risultato = prezzoBigliettoBase - scontoAnziani;
} else {
  risultato = prezzoBigliettoBase;
}
*/