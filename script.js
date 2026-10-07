const formular = document.querySelector(".formular");
const mesaj = document.querySelector("#mesaj-confirmare");

formular.addEventListener("submit", function(event) {
    event.preventDefault();

    mesaj.textContent = "Mulțumim! Solicitarea ta a fost trimisă.";
});