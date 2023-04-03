const faturamento=require('./dados.json');
let maior=faturamento[0].valor;
let menor=faturamento[0].valor;
let valor_total=0
let media=0;
let dia=0
let maior_que_media=0
let sem_lucro=0
// verifica o maior e  menor lucro
for(let i=1;i<faturamento.length;i++){
if(faturamento[i].valor<=0 ){
 
}
else{
	if(faturamento[i].valor>maior){
		maior=faturamento[i].valor;
	}
	else if(faturamento[i].valor<menor){
		menor=faturamento[i].valor;
	}

}

}
// conta os dias sem lucro e dias com lucro. A variável dia é usada para o cálculo da média
for(let i=0;i<faturamento.length;i++){
	if(faturamento[i].valor>0){
		dia++
	}
	else{
		sem_lucro++
	}
	valor_total+=faturamento[i].valor
}
media=valor_total/dia
//verfica dias com lucros maiores que a média
for(let i=0;i<faturamento.length;i++){
	if(faturamento[i].valor>media){
		maior_que_media++
	}
}
console.log("O valor total foi "+valor_total)
console.log("O menor valor foi "+menor)
console.log("O maior valor foi "+maior)
console.log("A média foi "+media.toFixed(2))
console.log("A quantidade de dias com valores maiores que a media foram "+maior_que_media)
console.log("Dias sem lucro "+sem_lucro)


