let nome = prompt("Olá, por favor digite seu nome no campo abaixo:");
let idade = prompt("Digite sua idade:")
let dataNasc = prompt ("Digite o ano do seu nascimento:")
let altura = prompt("Digite a sua altura:");
let peso = prompt("E por ultimo digite  o seu peso:")

let imc = peso / (altura * altura);
let anoNasc =  dataNasc;

alert ("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "Kg e seu IMC é " + imc + "Kg/m2")