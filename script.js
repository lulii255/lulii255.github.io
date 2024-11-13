const btnComentar = document.getElementById("btn_comentar");
const comentarioInput = document.getElementById("comentario");
const comentariosPrevios = document.querySelector(".comentarios_previos");

btnComentar.addEventListener("click", function() {
   
    const comentarioTexto = comentarioInput.value.trim();

    if (comentarioTexto) {

        const nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");

        nuevoComentario.innerHTML = `<p><strong>Tú:</strong> ${comentarioTexto}</p>`;

        comentariosPrevios.appendChild(nuevoComentario);

        comentarioInput.value = "";
    } else {
        alert("Por favor, escribe un comentario.");
    }
});
