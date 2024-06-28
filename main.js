const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log('vruuum');
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2010,
    acelerar: function() {
        console.log('vruuum');
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carooDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carooDaMaria2);

const nome = "Matheus";
const idade = 22;
const eMaiorDeIdade = true;
const conhecimentos = ["html", "css", "javascript"];

const pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade,
    conhecimentos: conhecimentos,
}

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome');

pessoa['sobrenome'] = 'Meissner';

if (pessoa['sobrenome']) {
    console.log("A pessoa tem um sobrenome");
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

console.log(pessoa.nome);
console.log(pessoa['nome']);





// EXEMPLOS DE USO

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof eMaiorDeIdade);
// console.log(typeof conhecimentos);
// console.log(typeof pessoa);

// console.log(carooDaMaria2 instanceof Carro);
// console.log(conhecimentos instanceof Carro);
