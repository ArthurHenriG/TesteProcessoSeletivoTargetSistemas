const faturamento={
 SP:67.83643,
 RJ:36.67866,
 MG:29.22988,
 ES:27.16548,
 Outros:19.84953,
};
let valor_total=0
let percentual

for(let valor in faturamento){
    valor_total+=faturamento[valor]
}


Object.keys(faturamento).forEach(function(item){
    console.log("O percentual do estado ",item,"foi igual a ",(percentual=faturamento[item]/valor_total)*100)
  

})