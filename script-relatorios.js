function carregarStaff(){

let staff = JSON.parse(localStorage.getItem("staff")) || [];

let lista = document.getElementById("lista-staff");

lista.innerHTML = "";

staff.forEach(function(membro){

let item = document.createElement("li");

item.innerText = membro.nome + " — " + membro.cargo;

lista.appendChild(item);

});

}

function adicionarStaff(){

let nome = document.getElementById("nome").value;
let cargo = document.getElementById("cargo").value;

let staff = JSON.parse(localStorage.getItem("staff")) || [];

staff.push({
nome:nome,
cargo:cargo
});

localStorage.setItem("staff", JSON.stringify(staff));

carregarStaff();

}
