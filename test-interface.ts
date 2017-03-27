interface Person {
    nome: string;
    cognome: string;
}

function ciao(persona: Person) {
    return "xa"+persona.nome +" " + persona.cognome 
}

var utente = {
    nome:"Mario",
    cognome:"Rossi"
} 

document.body.innerHTML = ciao(utente);
