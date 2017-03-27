class Workers {
    alias: string;

    constructor(  //guarda che ho passato dei paramteri con il modificatore di visiblità. Molto usato per fare la dependency injection
        public nome,
        public cognome
    ) {
        this.alias = nome + " " + cognome;
    }
}

interface Person {
    nome: string;
    cognome: string;
}

function ciao(persona: Person) {
    return "xa" + persona.nome + " " + persona.cognome
}

var utente = new Workers("tizio", "caio");

document.body.innerHTML = ciao(utente);
