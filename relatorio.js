function carregarRelatorios(){

let relatorios = JSON.parse(localStorage.getItem("relatorios")) || [];

let lista = document.getElementById("lista-relatorios");

lista.innerHTML = "";

relatorios.forEach(function(r){

let item = document.createElement("li");

item.innerText =
r.nome + " | " +
r.cargo + " | Status: " +
r.atividade;

lista.appendChild(item);

});

}

function salvarRelatorio(){

let nome = document.getElementById("nome").value;
let cargo = document.getElementById("cargo").value;
let atividade = document.getElementById("atividade").value;
let postura = document.getElementById("postura").value;
let positivo = document.getElementById("positivo").value;
let melhorar = document.getElementById("melhorar").value;

let relatorios = JSON.parse(localStorage.getItem("relatorios")) || [];

relatorios.push({
nome:nome,
cargo:cargo,
atividade:atividade,
postura:postura,
positivo:positivo,
melhorar:melhorar
});

localStorage.setItem("relatorios", JSON.stringify(relatorios));

carregarRelatorios();

}

carregarRelatorios();
