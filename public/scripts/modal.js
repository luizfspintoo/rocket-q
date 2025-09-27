export default function Modal() {

    const modalWrapper = document.querySelector(".modal-wrapper");
    const buttonCancel = document.querySelector(".modal-wrapper a.cancel");
    buttonCancel.addEventListener("click", ()=> {
        close();
    })

    function open() {
        modalWrapper.classList.add("active");
    }
    function close() {
        modalWrapper.classList.remove("active");
    }

    return { open, close };
}
