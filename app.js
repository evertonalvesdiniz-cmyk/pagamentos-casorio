const API = "https://script.google.com/macros/s/AKfycbwMjG30mgqMIHxIk55G9dgdcD-QSoQtC8yGPYhWhcPLEagtb2OBw9tm-9ZwjEdy1leVBQ/exec";

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
