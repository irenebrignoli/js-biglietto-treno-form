

const distanzaDom = document.getElementById('distanza');

const etaDom = document.getElementById('eta');

const buttonDom = document.getElementById('leggi-form');

const risultatoNome = document.getElementById('risultato-nome');

const risultatoOfferta = document.getElementById('risultato-offerta');

const risultatoCarrozza = document.getElementById('risultato-carrozza');

const risultatoCodice = document.getElementById('risultato-codice');

const risultatoPrezzo = document.getElementById('risultato-prezzo');

let prezzoAlKm = 0.21;

const biglietto = document.getElementById('biglietto');


//button avvio

buttonDom.addEventListener('click', 
  function () {

    //form

    risultatoNome.innerHTML = risultatoNome.value;
    console.log('Il nome è ' + risultatoNome.value);

    const distanzaInserita = parseInt(distanzaDom.value);
    console.log('Distanza inserita ' + distanzaInserita);
  
    const etaInserita = parseInt(etaDom.value);
    console.log('Età inserita ' + etaInserita);

    //biglietto

    const bigliettoOpen = document.getElementById('biglietto');
    bigliettoOpen.classList.remove('d-none');

    let prezzoBiglietto = prezzoAlKm * distanzaInserita;
    console.log('Prezzo biglietto normale: ' + prezzoBiglietto);

    let scontoGiovani = (prezzoBiglietto / 100) * 20;
    console.log('Sconto giovani: ' + scontoGiovani);

    let scontoAnziani = (prezzoBiglietto / 100) * 40;
    console.log('Sconto anziani: ' + scontoAnziani);

    if (etaInserita < 18) {

      const prezzoGiovani = prezzoBiglietto -= scontoGiovani;
      risultatoOfferta.innerHTML = `Hai diritto a uno sconto di: ${scontoGiovani.toFixed(2)} <br/> Biglietto Young`;
      risultatoPrezzo.innerHTML = prezzoGiovani.toFixed(2);
    
    } else if (etaInserita > 65){
    
      const prezzoAnziani = prezzoBiglietto -= scontoAnziani;
      risultatoOfferta.innerHTML = `Hai diritto a uno sconto di: ${scontoAnziani.toFixed(2)} <br/> Biglietto Old` ;
      risultatoPrezzo.innerHTML = prezzoAnziani.toFixed(2);
    
    } else {
    
      risultatoOfferta.innerHTML = `Biglietto Standard`;
      risultatoPrezzo.innerHTML = prezzoBiglietto.toFixed(2);
    }

    const risultatoCarrozzaNew = Math.floor (Math.random() * 9) + 1;
    risultatoCarrozza.innerHTML = risultatoCarrozzaNew;

    const risultatoCodiceNew = Math.floor (Math.random() * 99999);
    risultatoCodice.innerHTML = risultatoCodiceNew;
  }

  
);


//button reset


const resetdom = document.getElementById('reset-form');

resetdom.addEventListener('click', 
    function() {

        distanzaDom.value = "";
        etaDom.value ="";

        const bigliettoOpen = document.getElementById('biglietto');
        bigliettoOpen.classList.add('d-none');

    }
);



