const API = "https://script.google.com/macros/s/AKfycbxx1tDThfk9KI2S25AUoFh5RI3_K8R5r5eBhcpVC3t63_6pUsa02-dOAHSdNkOKlLO52g/exec";

function adicionarItem(){

fetch(API,{
method:"POST",
body:JSON.stringify({
tipo:"novo_item",
descricao:"Fotografo",
valor:3000
})
})

}

