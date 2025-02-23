document.addEventListener("DOMContentLoaded", () => {
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");
    const message = document.getElementById("message");

    // Mover el botón "No" cuando el usuario intente hacer clic
    btnNo.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
        btnNo.style.position = "absolute";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });

    // Mostrar el mensaje cuando el usuario haga clic en "Sí"
    btnYes.addEventListener("click", () => {
        message.classList.remove("hidden");
        btnYes.style.display = "none";
        btnNo.style.display = "none";
    });
});