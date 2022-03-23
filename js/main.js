/* Generatore di Password insicuro  */


// Chiedi all'utente il suo nome

const firstName = prompt(`What's your first name?`);

// Chiedi all'utente il suo cognome

const lastName = prompt(`What's your last name?`);
// Chiedi all'utente il suo colore preferito

const favColor = prompt (`What's your favourite color?`);

// Comunicare la password all'utente

const password = "La tua password è: " + firstName + lastName + favColor + "22";

console.log(password);

// Scrivi il risultato sulla pagina HTML

document.getElementById(`my_password`).innerHTML = password;





