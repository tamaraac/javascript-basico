let idade = 25;
console.log(idade);
let altura = 1.90 ;
console.log(altura);

let numero = 1;
console.log(numero);

let nome = "Tamara";
console.log(nome);

//variaveis
let cor = "Azul";
console.log(cor);

//constantes
const valorIngressoAdulto =100;
console.log(valorIngressoAdulto);

//Tipos primitivos

let nome1 = "Tamara" ;
console.log(nome);
//string literal

let idade2 = 32;
console.log(idade2);
//number literal
// boolean estaAprovado= false;
//boolean esta Aprovado = true;

let sobrenome ;
//undefined

let corSelecionada = null;//redefinir um valor 
//object


let pessoa ={
    nome : 'Tamara',
    idade:21,
    estaAprovado:false,
    nome2 : 'Anderson'
};
console.log(pessoa);

//arrays
//é um conj de dados que pode ser acessado por um indice

let familia =[20,9,'Tamara',10,15];

let nomeColega =['Anderson','piloto',25]

//functions

//tipos de referencia

//function nomeFuncao

let corSite ='Azul';
function resetacor (){
    corSite="";
}
console.log(corSite);
resetacor();

//tipos de funções

//realizar uma tarefe e não devolve nada

function dizerNome(){
    console.log("tamara");
}

//realiza um calculo e retorna algo
function multiplicarPorDois(valor){
    return valor* 2;
}
let resultado= multiplicarPorDois(6);
console.log(resultado);

//operadores

//operadores aritmeticos(matematicos)

//let salario =1001;

//+,-,*,/,

/*console.log(salario + salario);
console.log(salario-salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);*/
// ++ --
let idadee= 18;

console.log(++  idadee);
console.log(idade);


//operadores de atribuicao

let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer; //valorTecladoGamre=ValorTecladoGamer+valorTecladoGamer
valorTecladoGamer -= valorTecladoGamer //valorTecladoGamre=ValorTecladoGamer-valorTecladoGamer
console.log(valorTecladoGamer);

//operadores de igualdade 
//igualdade de estrita === ele compara o tipo,alem de comparar valores

console.log(1===1);
console.log('1' === 1);
//igualdade solta
console.log( 1==1);
console.log('1' ==1);

//operador ternario
//comparações 

let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);


//operadores de comparação
//operadores logicos

//and && retorna true se os dois operandos forem true

//console.log(true && true);
//let maiorDeIdade = true;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);


//ou or ||
//re
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log(podeAplicar);

//não not !
let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado);


//operadores bit


//boolean 