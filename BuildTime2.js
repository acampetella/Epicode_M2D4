// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50

//funzione che calcola il totale del carrello
function getTotalCart(prices, user, shippingCost) {
  let total = 0;
  for(let price of prices) {
    total += price;
  }
  if (user.isAmbassador) {
    total -= total * 0.3;
  }
  if (total <= 100) {
    total += shippingCost;
  }
  return total;
}

//esempi di utilizzo della funzione getTotalCart() sugli utenti sopra definiti, supponendo che comprino le stesse cose
document.writeln("Totale di Marco: " + getTotalCart(prices, marco, shippingCost));
document.writeln("<br>");
document.writeln("Totale di Paul: " + getTotalCart(prices, paul, shippingCost));
document.writeln("<br>");
document.writeln("Totale di Amy: " + getTotalCart(prices, amy, shippingCost));