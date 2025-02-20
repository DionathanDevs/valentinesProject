

function clicou() {
    let item = document.getElementById("back-album");
    let item2 = document.getElementById("music-container");
    let item3 = document.getElementById("footer");
    item.scrollIntoView({ behavior: "smooth" });
    item.style.opacity = "1";
    item2.style.opacity = "1";
    item3.style.opacity = "1";


    for (let i = 0; i < 10; i++) { // Gera 10 corações
        setTimeout(() => criarCoracao(), i * 300); // Cria corações em intervalos
    }
}

function criarCoracao() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    // Gera posições aleatórias **dentro da área visível**
    let x = Math.random() * (screenWidth - 50); // Evita que saia da tela
    let y = window.scrollY + Math.random() * (screenHeight - 100); // Dentro da área visível

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Remover coração após 5 segundos
    setTimeout(() => heart.remove(), 5000);
}