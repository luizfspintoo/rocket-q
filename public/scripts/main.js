import Modal from "./modal.js"; 
const modal = Modal();

const checkButtons = document.querySelectorAll(".actions a.check");
const deleteButtons = document.querySelectorAll(".actions a.delete");

//informações do modal
const titleModal = document.querySelector(".modal-wrapper .modal h3");
const descriptionModal = document.querySelector(".modal-wrapper .modal p");
const buttonModal = document.querySelector(".modal-wrapper .modal button");

checkButtons.forEach(button => {
    button.addEventListener("click", (event) => hadleModal(event, true));
});

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => hadleModal(event, false));
});

function hadleModal(event, check) {
    event.preventDefault();
    const title = check ? "Marcar como lida a pergunta" : "Excluir está pergunta";
    const description = check ? "Tem certeza que deseja marcar como lida a pergunta?" : "Tem certeza que deseja excluir está pergunta?";
    const action = check ? "Sim, como lida" : "Sim, excluir";

    titleModal.innerText = title;
    descriptionModal.innerText = description;
    buttonModal.innerText = action;

    const bgButton = check ? "var(--blue)" : "var(--red)";
    buttonModal.style.background = bgButton;

    //pegando dados do formulario
    const roomId = document.querySelector("#room-id").dataset.id;
    const slug = check ? "check" : "delete";
    const questionId = event.target.dataset.id;

    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/questions/${roomId}/${questionId}/${slug}`);

    modal.open();
}
