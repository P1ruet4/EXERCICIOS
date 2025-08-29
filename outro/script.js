var carro = {

    marca: "Fiat",
    modelo: "UNO-way",
    ano: 2014,
}
console.log("marca do carro: ", carro.marca);
console.log("Modelo da maquina: ", carro.modelo);
console.log("ano do veiculo: ", carro.ano);

console.log(carro.marca);

carro.ano = 2015/16;
console.log("ano atualizado: ", carro.ano);

carro.cor = "twilight";
console.log("cor do carro: ", carro.cor);


var pessoa ={

    nome: "Oswaldo",
    idade: "12",
    apresentar: function() {
        console.log("Olá, meu nome é", pessoa.nome, "e tenho", pessoa.idade, "anos.")        
    }
}

pessoa.apresentar()