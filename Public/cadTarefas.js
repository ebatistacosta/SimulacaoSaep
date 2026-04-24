const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const descricao = document.getElementById("descricao").value.trim();
    const setor     = document.getElementById("Setor").value.trim();
    const usuario   = document.getElementById("Usuario").value.trim();
    const prioridade = Number(document.getElementById("Prioridade").value);

    if (!descricao || !setor || !usuario) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
       
        const resUsuario = await fetch(`http://localhost:3000/usuarios?nome=${encodeURIComponent(usuario)}`);

        if (!resUsuario.ok) {
            alert("Erro ao verificar usuário.");
            return;
        }

        const usuarios = await resUsuario.json();

     
        if (!Array.isArray(usuarios) || usuarios.length === 0) {
            alert(`Usuário "${usuario}" não encontrado. Cadastre o usuário antes de criar a tarefa.`);
            return;
        }

        const usuarioId = usuarios[0].id; 

      
        const res = await fetch("http://localhost:3000/tarefas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                descricao,
                setor,
                usuarioId,   
                prioridade, 
            }),
        });

        const data = await res.json();

        if (res.ok) {
            alert("Tarefa cadastrada com sucesso!");
            form.reset();
        } else {
            alert(data.erro || "Erro ao cadastrar tarefa");
        }
    } catch (err) {
        alert("Erro de conexão com o servidor");
    }
});