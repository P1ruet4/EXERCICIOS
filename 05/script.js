console.log('Hello');

//com array
var alunos = ['João', 'Ana', 'Caio'];
var medias = [7, 8, 6];

console.log("o aluno:", aluno [1], "tem a média:", medias [1]);


//com objeto

var estudantes = {

    nome : "Plata",
    nota1 : 8,
    nota2 : 9,
    medias : 8.5
}

console.log(estudantes.nome)
console.log(estudantes.nota2)
console.log(estudantes.nota1)
console.log(estudantes.nome, "=", estudamtes.medias)

var obj = {
nome : "pensamento crítico",
materia : "sociologia",
classe : "proletariado",
pensamento : "conciencia de classe"
}

console.log(obj.nome)
console.log(obj.materia)
console.log(obj.classe)
console.log(obj.classe, "=", obj.pensamento)

var obj2 = {
    nome : "cadeira",
    material : "madeira",
    cor : "marrom",
    uso : "sentar"
}
console.log(obj2.nome)
console.log(obj2.material)
console.log(obj2.cor)
console.log(obj2.nome, "=", obj2.uso)

//relacionando as duas infomrações

console.log(estudantes.nome, "sentou na", obj2.nome)


//outra forma de acessar os dados do objeto
console.log("onde:", estudantes['nome'])

//criando um objeto vazio
var estojo = {}
console.log(estojo);

estojo.cor = "azul"
estojo.material = "plástico"
console.log(estojo);

    