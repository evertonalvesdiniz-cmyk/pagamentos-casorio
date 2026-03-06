const SENHA = "30042026"

let dados = []

function login(){

const s = document.getElementById("senha").value

if(s === SENHA){

document.getElementById("loginBox").style.display="none"
document.getElementById("sistema").style.display="block"

carregar()

}else{

document.getElementById("erro").innerText="Senha incorreta"

}

}

function logout(){

location.reload()

}

async function carregar(){

const r = await fetch("data.json")
dados = await r.json()

render()

}

function salvar(){

const item = document.getElementById("item").value
const categoria = document.getElementById("categoria").value
const total = Number(document.getElementById("valorTotal").value)
const pago = Number(document.getElementById("valorPago").value)

dados.push({
item,
categoria,
total,
pago
})

render()

}

function deletar(i){

dados.splice(i,1)

render()

}

function render(){

let tabela = document.getElementById("tabela")
tabela.innerHTML=""

let totalPlanejado = 0
let totalPago = 0

dados.forEach((d,i)=>{

let falta = d.total - d.pago

totalPlanejado += d.total
totalPago += d.pago

tabela.innerHTML += `
<tr>

<td>${d.item}</td>
<td>${d.categoria}</td>
<td>${d.total}</td>
<td>${d.pago}</td>
<td>${falta}</td>

<td>
<button class="delete" onclick="deletar(${i})">X</button>
</td>

</tr>
`

})

document.getElementById("totalPlanejado").innerText="R$"+totalPlanejado
document.getElementById("totalPago").innerText="R$"+totalPago
document.getElementById("faltaPagar").innerText="R$"+(totalPlanejado-totalPago)

}