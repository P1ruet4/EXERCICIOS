var aluno = {

    nome: "felps",
    anoEscola: "12",
    turma: "A",
    notas: [8, 7 ,6], 
    estudos: function(){
        console.log("Estudando")
    },
    media : function(n1,n2,n3){
        return((n1+n2+n3) / 3)
    },
    ocorrencias: listaDeOcorrencias
}
console.log("O aluno: ", aluno.nome, "está no", aluno.anoEscola, "no ano escolar.");

aluno.estudar()

console.log("Media final: ", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));

function listaDeOcorrencias(){

    
    console.log("Comeu na biblioteca");
    console.log("Xingou no carregador de celular");
    console.log("Nao fez o dever de casa");

    
}
