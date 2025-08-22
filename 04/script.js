var alunos = ["amaranto", "cinerária", "cesar", "kaiser"]

//mostra o array
console.log(alunos);

//mostra um valor de um a posição específica do array
console.log(alunos[2]);

//troca um valor
alunos[3] = "ciclamen"
//array com valores de varios tipos
var aleatorio = ["ultilidade", 8, "fromento", 1.5, 3, false, "sola"]

// loop para mostrar os valores do array
for(var i = 0; i < 7; i++){
    console.log(aleatorio[i]);
}
for(var i = 0; i < aleatorio.length; i++){
    console.log(aleatorio[i]);
}
// array de times
var times = ["Flamengo", "Vasco", "Botafogo", "Fluminense"]

// loop para mostrar os valores do array
for(var index in times){
    console.log(index); //mostra o numero da caixinha que descobriu
    console.log(times[index]); //mostra o valor que está na caixinha 
}


// deveres
var nomes = ["Juan", "Murilo", "Johnas", "cleide"]
  for(var i = 7; i > - 1; i--){
    console.log(numeros[i]);}
