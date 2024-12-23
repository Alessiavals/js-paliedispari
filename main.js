// Funzione per verificare se una parola è palindroma
function isPalindroma(word) {
    const cleanedWord = word.replace(/\s+/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
  }
  
  // Funzione per generare un numero casuale tra 1 e 5
  function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  // Funzione per verificare se un numero è pari
  function isPari(numero) {
    return numero % 2 === 0;
  }
  
  // Funzione per verificare se un numero è dispari
  function isDispari(numero) {
    return numero % 2 !== 0;
  }
  
  // Menu per scegliere tra Palindroma o Pari e Dispari
  const sceltaGioco = prompt("Scegli un gioco:\n1. Palindroma\n2. Pari o Dispari");
  
  if (sceltaGioco === "1") {
    // Gioco della palindromia
    const parola = prompt("Inserisci una parola per verificare se è palindroma:");
    if (isPalindroma(parola)) {
      console.log("La parola è palindroma!");
    } else {
      console.log("La parola NON è palindroma.");
    }
  } else if (sceltaGioco === "2") {
    // Gioco di Pari o Dispari
    const sceltaUtente = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
    if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
      console.log("Scelta non valida.");
    } else {
      const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
      
      if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
        console.log("Numero non valido.");
      } else {
        const numeroComputer = getRandomNumber();
        console.log("Il numero del computer è:", numeroComputer);
  
        const somma = numeroUtente + numeroComputer;
        console.log("La somma dei due numeri è:", somma);
  
        const sommaPari = isPari(somma);
        const sommaDispari = isDispari(somma);
  
        if (sceltaUtente === "pari" && sommaPari) {
          console.log("Hai vinto! La somma è pari.");
        } else if (sceltaUtente === "dispari" && sommaDispari) {
          console.log("Hai vinto! La somma è dispari.");
        } else {
          console.log("Hai perso! La somma non corrisponde alla tua scelta.");
        }
      }
    }
  } else {
    console.log("Scelta non valida.");
  }
  




  