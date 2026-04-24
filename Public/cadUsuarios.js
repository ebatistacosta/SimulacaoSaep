const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();

if(!nome || !email){
    alert("Preencha todos os campos!");
    return;
}

try {

const res = await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({nome, email}),
});

const data = await res.json(); 

if (res.ok) {
    alert("Usuario cadastrado");
    form.reset();
}else{
    alert(data.erro || "Erro ao cadastrar");
}
} catch (err) {
    alert("Erro de conexão com o servidor");
}

});