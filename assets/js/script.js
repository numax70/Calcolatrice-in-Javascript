let operazione, risultato, x, y, operazioni;
window.addEventListener("load", () => {
  operazione = document.getElementById("operazione");
  risultato = document.getElementById("risultato");
  eventHandler();
});

getValue = () => {x = Number(firstNumber.value);y=Number(lastNumber.value);operazioni = operazione.value;}
eventHandler = () => {
  let cancella = document.getElementById("cancella");
  operazione.addEventListener("change", () => {
    let firstNumber = document.getElementById("firstNumber");
    let lastNumber = document.getElementById("lastNumber");
    getValue(firstNumber, lastNumber);
    calcola();
  });
  cancella.addEventListener("click", clearInput);
};
calcola = () => {
  getValue();
  x == "" ? (risultato.innerHTML = "Non è consentito utilizzare caratteri o spazi vuoti!!") +
        firstNumber.focus() + clearSelect(): y == "" ? (risultato.innerHTML =
        "Non è consentito utilizzare caratteri o spazi vuoti!!") +
        lastNumber.focus()+clearSelect() : callSwitch();
};
callSwitch = () => {
  switch (operazioni) {
    case "addizione":
      risultato.innerHTML = addizione(x, y);
      break;
    case "sottrazione":
      risultato.innerHTML = sottrazione(x, y);
      break;
    case "moltiplicazione":
      risultato.innerHTML = moltiplicazione(x, y);
      break;
    case "divisione":
      risultato.innerHTML = divisione(x, y);
      break;
    default:
      clearInput();
  }
};

addizione = (x, y) => getMessage() + (x + y);
sottrazione = (x, y) => getMessage() + (x - y);
moltiplicazione = (x, y) => getMessage() + x * y;
divisione = (x, y) => getMessage() + (x / y).toFixed(3);
getMessage = () => (risultato.innerHTML = "Il risultato è:  ");

clearInput=()=>{
  risultato.innerHTML = "Scegli un operazione";
  risultato.innerHTML = "";
  firstNumber.value = "";
  lastNumber.value = "";
  operazione.value = "";
  firstNumber.focus();
}

clearSelect=()=>{
    operazione.value = "";    
}
