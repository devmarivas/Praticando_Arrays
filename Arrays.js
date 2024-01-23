//Criando uma função que recebe um array com 4 produtos e imprimindo no console:
const comprasAcademia = ['Mouse' , 'Teclado' , 'Mousepad' , 'Headset'];
console.log(comprasAcademia);
//Adicionando 1 produto no final do array e imprimindo na tela;
comprasAcademia.push('Powerbank');
console.log(comprasAcademia);
//Removendo 1 produto no final do array e imprimindo na tela;
comprasAcademia.pop()
console.log(comprasAcademia);
//Adicionando 1 produto no inicio do array e imprimindo na tela;
comprasAcademia.unshift('Organizador de cabos');
console.log(comprasAcademia);
//Removendo 1 produto no inicio do array e imprimindo na tela;
comprasAcademia.shift();
console.log(comprasAcademia);
//Imprimindo um produto do indice 2
console.log(comprasAcademia[1]);