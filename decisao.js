//Estrutura de decisão If e Else
/*if (condicao){
}
else{
}*/

const nome = 'Eduardo'

if(nome == 'Eduardo'){
    console.log('Condição atendida: ' + nome)
}else{
    console.log('Condição não atendida: ' + nome)
}
if(nome == 'Ana'){
    console.log('Condição atendida: ' + nome)
}else{
    console.log('Condição não atendida: ' + nome)
}

let idade = 30

if(idade == 25){
    console.log('Condição atendida: ' + idade)
}else{
    console.log('Condição não atendida: ' + idade)
}

if(idade < 25){
    console.log('Condição atendida: ' + idade)
}else if (idade == 30){
    console.log('Condição atendida: ' + idade)
}
else{
    console.log('Condição não atendida: ' + idade)
}

if(idade > 25){
    console.log('Condição atendida: ' + idade)
}else{
    console.log('Condição não atendida: ' + idade)
}