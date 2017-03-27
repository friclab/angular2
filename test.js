function ciao(persona) {
    return "xa" + persona.nome + " " + persona.cognome;
}
var utente = {
    nome: "Mario",
    cognome: "Rossi"
};
document.body.innerHTML = ciao(utente);
