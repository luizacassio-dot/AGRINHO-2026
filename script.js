// ===============================
// AGRINHO 2026 - Sustentabilidade no Agro
// ===============================

// Executa quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
    console.log("Bem-vindo ao projeto AGRINHO 2026!");

    configurarBotao();
    configurarFormulario();
});

// ------------------------------
// Botão com mensagem educativa
// ------------------------------
function configurarBotao() {
    const botao = document.querySelector("#btnSaibaMais");

    if (botao) {
        botao.addEventListener("click", () => {
            alert(
                "A sustentabilidade no agro ajuda a preservar o solo, economizar água, proteger a biodiversidade e produzir alimentos de forma responsável."
            );
        });
    }
}

// ------------------------------
// Validação do formulário
// ------------------------------
function configurarFormulario() {
    const formulario = document.querySelector("#formContato");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.querySelector("#nome");
            const email = document.querySelector("#email");

            if (nome.value.trim() === "" || email.value.trim() === "") {
                alert("Preencha todos os campos antes de enviar.");
                return;
            }

            alert("Mensagem enviada com sucesso! Obrigado por apoiar a sustentabilidade no agro.");
            formulario.reset();
        });
    }
}

// ------------------------------
// Animação ao rolar a página
// ------------------------------
window.addEventListener("scroll", () => {
    const secoes = document.querySelectorAll(".animar");

    secoes.forEach(secao => {
        const posicao = secao.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            secao.classList.add("mostrar");
        }
    });
});

// ------------------------------
// Mensagens sobre sustentabilidade
// ------------------------------
const dicas = [
    "🌱 Preserve o solo utilizando técnicas sustentáveis.",
    "💧 Economize água na produção agrícola.",
    "🌳 Plante árvores e proteja as nascentes.",
    "♻️ Recicle materiais utilizados na propriedade.",
    "🚜 Utilize tecnologias que reduzam os impactos ambientais."
];

function mostrarDica() {
    const mensagem = document.querySelector("#mensagem");

    if (mensagem) {
        const indice = Math.floor(Math.random() * dicas.length);
        mensagem.textContent = dicas[indice];
    }
}

// Atualiza a dica a cada 5 segundos
setInterval(mostrarDica, 5000);
