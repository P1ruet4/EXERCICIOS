//arrays pra guardas as informações
var alunos = [];
var notas1 = [];
var notas2 = [];

//guardar as informações vindas do usuario
function cadastro(){
    for(var i = 0; i < 3; i++){
        alunos[i] = prompt("Nome do aluno: ");
        notas1[i] = Number ( prompt("Nota 1: "));
        notas2[i] = Number (prompt("Nota 2: "));
    }
}
//calcular media

function media(Nota1, Nota2){
let mediaFeita = ((notas1*0.4) + (notas2*0.6))
return mediaFeita;

}
//aprovado >= 7, recuperação media < 7 e >= 5, reprovado media < 5
function situacao(mediaFINAL){
    if(mediaFINAL >= 7){
        return "Aprovado"
    }
    else if(mediaFINAL < 7 && mediaFINAL >= 5){
        return "Recuperação"
    }
    else{
        return "Reprovado"
    }
}
//função quwe mostra os resultados
function mostrarResul(){
    for(var index in alunos){
        let notaPrimeira = notas1[index];//pega aprimeira nota e guarda, vinda do array notas1
        let notaSegunda = notas2[index];//pega a segunda nota e guarda, vinda do array notas2
        let mediaAtual = media(notaPrimeira, notaSegunda);//manda pra função de media
        let status = situacao(mediaAtual);//descobre a situação de acordo com a média
        console.log("O aluno: ", alunos[index],"teve a media de: ", mediaAtual);
        console.log("E o status está: ", status); 
    }

cadastro();
mostrarResul();}