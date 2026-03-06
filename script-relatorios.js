function carregar(){

let dados = JSON.parse(localStorage.getItem("avaliacao")) || [];

let lista = document.getElementById("lista");

lista.innerHTML = "";

dados.forEach(function(a){

let item = document.createElement("li");

item.innerText = a.nome + " - " + a.nota;

lista.appendChild(item);

});

}

function salvar(){

let nome = document.getElementById("nome").value;

let nota = document.getElementById("nota").value;

let dados = JSON.parse(localStorage.getItem("avaliacao")) || [];

dados.push({

nome:nome,
nota:nota

});

localStorage.setItem("avaliacao", JSON.stringify(dados));

carregar();

}

carregar();
