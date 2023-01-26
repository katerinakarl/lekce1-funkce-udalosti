// tady je místo pro náš program

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */


 function changeColor() {
  let square = document.querySelector(".ctverecek");
  square.style.backgroundColor="green"
}

function secti(a, b) {
  let c = a + b;
  return c;
}

function show_result() {
let a = 5;
let b = 4;
document.querySelector("#vysledek").innerHTML = (a + b)
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
alert("Gratulace, právě jsi spustila tuto funkci!");

/*Změna textu ve čtverečku*/

let ctverecek = document.querySelector (".ctverecek");
ctverecek.innerHTML = "Gratulace";

console.log("Gratulace, právě jsi spustila tuto funkci!")
}

