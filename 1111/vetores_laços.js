//Vetores = Array = Lista de valores
const listaCompras = ["Arroz", "Feijão", "Carne", "Leite", "Ovos"];

//Vetor misturado com diferentes tipos de dados
const misturado = ["Arroz", 8, true];

//Imprimir o vetor
console.log(listaCompras);

//Imprimir o primeiro valor do vetor
console.log(listaCompras[0])
//Imprimir o tamanho do vetor
console.log(listaCompras.length)

//Adicionar um valor ao vetor

//listaCompras.push("Açúcar");

//console.log(listaCompras);

//Remover o último valor do vetor

//listaCompras.pop();

//console.log(listaCompras);

//Remover o primeiro valor do vetor

//listaCompras.shift();

//console.log(listaCompras);

//Adicionar um valor ao início do vetor

//listaCompras.unshift("Açúcar");

//console.log(listaCompras);

//Remover um valor do vetor

//listaCompras.splice(2, 1);

//console.log(listaCompras);

//Adicionar um valor no lugar de outro

//listaCompras.splice(2, 1, "Açúcar");

//console.log(listaCompras);

listaCompras.push("Amora");

//Imprimir o vetor com um laço for (i++ = i + 1) i é uma variável que vai ser incrementada de 1 em 1
//listaCompras.length é o tamanho do vetor
//listaCompras[i] é o valor do vetor na posição i
//console.log(listaCompras[i]) é o valor do vetor na posição i
//console.log("--------------------------------") é uma linha de separação
//console.log(listaCompras[i]) é o valor do vetor na posição i
for(let i = 0; i < listaCompras.length; i++){
    console.log("--------------------------------");
    console.log(`Index ${i}: ${listaCompras[i]}`); //Index é a posição do vetor e ${listaCompras[i]} é o valor do vetor na posição i
}

//Imprimir o vetor com um laço for each (of = de)
//item é o valor do vetor
//console.log(item) é o valor do vetor
//console.log("--------------------------------") é uma linha de separação
//console.log(item) é o valor do vetor
for(let item of listaCompras){
    console.log("--------------------------------");
    console.log(item);
}

console.log(listaCompras.indexOf("Amora")); //indexOf = encontrar o índice do valor no vetor

let x = 0;

//Laço while (enquanto x for menor que 10, o laço será executado)
while(x < 10){
    console.log(x);
    x++;
}