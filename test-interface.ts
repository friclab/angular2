interface Person {
    nome: string;
    cognome: string;
}

function ciao(persona: Person) {
    return "xa"+persona.nome +" " + persona.cognome 
}

var utente = { //fa la corrispondenza con gli attributi dell'interfaccia, perciò è di tipo Person
    nome:"Mario",
    cognome:"Rossi"
} 

document.body.innerHTML = ciao(utente);
