let anterior=0,proximo=0,atual=1,cont=1,num=6

while(cont<num){
    proximo=atual+anterior
    anterior=atual
    atual=proximo
    cont++
}

console.log(proximo)