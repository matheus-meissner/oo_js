function Pokemon(tipo, resistencia, fraqueza) {
    this.tipo = tipo;
    this.resistencia = resistencia;
    this.fraqueza = fraqueza;
}

function Mew (tipo, resistencia, fraqueza, cor, hp) {
    Pokemon.call(this, tipo, resistencia, fraqueza);
    this.cor = cor;
    this.hp = hp;
}

function Gengar (tipo, resistencia, fraqueza, cor, hp) {
    Pokemon.call(this, tipo, resistencia, fraqueza);
    this.cor = cor;
    this.hp = hp;
}

function Snorlax (tipo, resistencia, fraqueza, cor, hp) {
    Pokemon.call(this, tipo, resistencia, fraqueza);
    this.cor = cor;
    this.hp = hp;
}

const pokemon1 = new Mew("Psíquico", "Lutador", "Dark", "Rosa", 210);
const pokemon2 = new Gengar("Dark", "Psíquico", "Lutador", "Roxo", 310);
const pokemon3 = new Snorlax("Normal", "Nenhum", "Lutador", "Verde", 150);

console.log(pokemon1);
console.log(pokemon2);
console.log(pokemon3);
