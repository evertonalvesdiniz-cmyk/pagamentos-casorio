const API = "https://script.google.com/macros/s/AKfycbxf0od7RTr9Zux_Gkeh_urcKuHKNg23HlwNOeIF8xyqpNUN9uKa7-HhACkh713QedvvFw/exec";

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


