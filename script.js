function login(){

let usuario = document.getElementById("usuario").value;
let senha = document.getElementById("senha").value;

if(usuario === "supervisor" && senha === "12345"){

localStorage.setItem("cargo","supervisor");

window.location.href = "dashboard.html";

}

else if(usuario === "visitante" && senha === "12345"){

localStorage.setItem("cargo","visitante");

window.location.href = "visitante.html";

}

else{

document.getElementById("erro").innerText = "Usuário ou senha incorretos";

}

}
