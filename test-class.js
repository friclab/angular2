var Workers = (function () {
    function Workers(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.alias = nome + " " + cognome;
    }
    return Workers;
}());
function ciao(persona) {
    return "xa" + persona.nome + " " + persona.cognome;
}
var utente = new Workers("tizio", "caio");
document.body.innerHTML = ciao(utente);
