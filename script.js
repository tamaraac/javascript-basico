
//trocar valores
let a ='vermelho';
let b = 'azul';
let x  = a;


a=b;//azul
b= x;//vermelho

console.log(x);
console.log(a);
console.log(b);


//if else

//se a hora estiver entre as 6:00 e 12:00 : bom dia
//se a hora estiver entre 12:00 as 18:00 : boa tarde
//caso contrario : boa noite!

let hora= 14;
if (hora >6 && hora < 12 ){
    console.log('bom dia!');
    //codigo a ser executado
}
else if (hora > 12 && hora < 18){
    console.log('boa tarde!');
    //codigo a ser executado
}

//switch case
 let permissao = 'gerente'; // comum,gerente,diretor

 switch(permissao){
    case'comum':
    console.log('usuario comum');
    break;
    
    case'gerente':
    console.log('usuario gerente');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break;

    default:
    console.log('usuario não reconhecido');

 }

 //laço loop for
 //1.for
 for(let i = 1;i < 9; i++){
    if(i % 2==0){
        console.log(i);
    }
   
 }


 //2.while
 let i =5;
 while(i>=1)
 {
    if(i% 2==0){
        console.log(i);
 }i--
}
 //3.do..while
 let i =0;
 do {
    console.log('digitando!',i);
    i++;
 } while(i<10);
 //4.for..in
 //objetos e arrays
 const pessoa = {
    nome:'Tamara',
    idade :20,
 };
 //key-value
 for (let chave in pessoa){
    console.log(chave,pessoa['idade']);
 }

 const cor =['vermelho','azul','rosa'];
 for (let indice in cores){
    console.log(indice,cores[indice]);
 }
 //for-of

 for(let cor of cores){
    console.log(cor);
 }

 ///escreva uma função que usa 2 numeros e retorne o maior entre eles


 let valorMaior = max(12,9) ;

 function max(n1,n2){
    return n1>n2 ? n1:n2;
 }
 console.log(valorMaior);



const resultado = fizzBuzz(1);
console.log(resultado);

function fizzBuzz (entrada){
    if(typeof entrada!=='number')
    return 'não e um numero';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
    return 'fizzBuzz';
    if(entrada % 5 === 0)
    return entrada;
}

verficarVelocidade(70);

function verificarVelocidade(velocidade){
   const velocidadeMaxima =70;
   const kmPorPonto =5;
   if(velocidade <=velocidadeMaxima)
    console.log('ok');
    else{
        const pontos = Math.floor(((velocidade -velocidadeMaxima)/kmPorPonto));
        if(pontos>=12)
            console.log('carteira suspensa');
        else
            console.log('pontos',pontos);
    }


}

exibirTipo (16);
function exibirTipo(limite){
    for(let i = 0; i<= limite; i++){
        if(i % 2 === 0)
            console.log(i,'Par');
        else
            console.log(i,'Impar');
    }
}


const filme ={
    titulo :'barbie movie',
    ano: 2023,
    diretora :'matel',
    personagem: 'ken'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj)
    if(typeof prop[prop] ==='string')
        console.log(prop,obj[prop])

}

somar(10);

function somar(limite){
    let multiplosDe3=0;
    let multiplosDe5 =0;

    for (i =0; i<=limite;i++){
        if(i % 3 ===0)
        multiplosDe3+=multiplosDe3+1;
        if(i % 5 === 0)
        multiplosDe5 += multiplosDe5+1

    }
    console.log(multiplosDe3+multiplosDe5);
}

const array = [70,70,80];

console