const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;

if(!nome || !email){
    alert("Preencha todos os campos!");
    return;
}

const usuario ={nome, email};

let usuario = JSON.parse(localStorage.getItem("usuarios"))|| [];


usuarios.push(usuario);

localStorage.setItem("usuario",
    JSON.stringify(usuarios));

    alert("Usuario cadastrado com sucesso!");

    form.reset();

});
