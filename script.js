/* =====================================================
   LITERATURA E SOCIEDADE — JAVASCRIPT
   ===================================================== */


/* =====================================================
   MENU MOBILE
   ===================================================== */

const botaoMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", () => {

        menu.classList.toggle("ativo");

    });


    /* Fechar menu ao clicar em algum link */

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("ativo");

        });

    });

}


/* =====================================================
   SCROLL SUAVE
   ===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (evento) {

        evento.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =====================================================
   GALERIA DE IMAGENS
   ===================================================== */

const fotos =
    document.querySelectorAll(".foto");


const botoesImagem =
    document.querySelectorAll(".abrir-imagem");


const modalImagem =
    document.getElementById("modal-imagem");


const imagemAmpliada =
    document.getElementById("imagem-ampliada");


const tituloImagem =
    document.getElementById("titulo-imagem");


const fecharModal =
    document.getElementById("fechar-modal");



/* =====================================================
   FUNÇÃO PARA ABRIR O MODAL
   ===================================================== */

function abrirModal(imagem, titulo = "") {


    if (!modalImagem || !imagemAmpliada) {

        return;

    }


    imagemAmpliada.src = imagem;


    imagemAmpliada.alt =
        titulo || "Imagem ampliada";


    if (tituloImagem) {

        tituloImagem.textContent = titulo;

    }


    modalImagem.classList.add("aberto");


    modalImagem.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =====================================================
   FUNÇÃO PARA FECHAR O MODAL
   ===================================================== */

function fecharJanelaImagem() {


    if (!modalImagem) {

        return;

    }


    modalImagem.classList.remove(
        "aberto"
    );


    modalImagem.setAttribute(
        "aria-hidden",
        "true"
    );


    if (imagemAmpliada) {

        imagemAmpliada.src = "";

    }

}


/* =====================================================
   GALERIA EXISTENTE
   ===================================================== */

fotos.forEach(foto => {

    foto.addEventListener("click", () => {


        const imagem =
            foto.getAttribute("data-imagem");


        if (imagem) {

            abrirModal(
                imagem,
                "Registro da atividade"
            );

        }

    });

});


/* =====================================================
   PRODUÇÕES DOS ESTUDANTES
   ===================================================== */

botoesImagem.forEach(botao => {

    botao.addEventListener("click", () => {


        const imagem =
            botao.getAttribute("data-imagem");


        const titulo =
            botao.getAttribute("data-titulo") ||
            "Produção dos estudantes";


        if (imagem) {

            abrirModal(
                imagem,
                titulo
            );

        }

    });

});


/* =====================================================
   BOTÃO FECHAR
   ===================================================== */

if (fecharModal) {

    fecharModal.addEventListener(
        "click",
        fecharJanelaImagem
    );

}


/* =====================================================
   FECHAR CLICANDO FORA DA IMAGEM
   ===================================================== */

if (modalImagem) {

    modalImagem.addEventListener(
        "click",
        evento => {

            if (
                evento.target === modalImagem
            ) {

                fecharJanelaImagem();

            }

        }
    );

}


/* =====================================================
   FECHAR COM ESC
   ===================================================== */

document.addEventListener(
    "keydown",
    evento => {

        if (evento.key === "Escape") {

            fecharJanelaImagem();

        }

    }
);


/* =====================================================
   ANIMAÇÃO DE ENTRADA
   ===================================================== */

const elementos =
    document.querySelectorAll(
        ".card-objetivo, .atividade, .evento, .voz, .obra"
    );


if (
    "IntersectionObserver" in window
) {

    const observador =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach(
                    entrada => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "aparecer"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    elementos.forEach(
        elemento => {

            observador.observe(
                elemento
            );

        }
    );

}
/* =====================================================
   LER MAIS — ATIVIDADES
   ===================================================== */

const botoesLerMais = document.querySelectorAll(
    ".abrir-atividade"
);

const modalAtividade = document.getElementById(
    "modal-atividade"
);

const tituloAtividade = document.getElementById(
    "titulo-atividade"
);

const textoAtividade = document.getElementById(
    "texto-atividade"
);

const fecharAtividade = document.getElementById(
    "fechar-atividade"
);


/* ABRIR MODAL */

botoesLerMais.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const titulo = botao.dataset.titulo;
        const texto = botao.dataset.texto;

        tituloAtividade.textContent = titulo;
        textoAtividade.textContent = texto;

        modalAtividade.classList.add("aberto");

    });

});


/* FECHAR */

if (fecharAtividade) {

    fecharAtividade.addEventListener("click", function() {

        modalAtividade.classList.remove("aberto");

    });

}


/* FECHAR CLICANDO FORA */

if (modalAtividade) {

    modalAtividade.addEventListener("click", function(evento) {

        if (evento.target === modalAtividade) {

            modalAtividade.classList.remove("aberto");

        }

    });

}


/* FECHAR COM ESC */

document.addEventListener("keydown", function(evento) {

    if (
        evento.key === "Escape" &&
        modalAtividade
    ) {

        modalAtividade.classList.remove("aberto");

    }

});


/* ==========================================
   NAVEGAÇÃO DAS PRODUÇÕES
========================================== */

const botaoAnterior = document.getElementById("anterior");

const botaoProxima = document.getElementById("proxima");

const indicadores =
    document.querySelectorAll(".indicador");


let slideAtual = 0;


/* ATUALIZAR BOLINHAS */

function atualizarIndicadores() {

    indicadores.forEach(function(indicador, indice) {

        if (indice === slideAtual) {

            indicador.classList.add("ativo");

        } else {

            indicador.classList.remove("ativo");

        }

    });

}


/* BOTÃO PRÓXIMA */

if (botaoProxima) {

    botaoProxima.addEventListener("click", function() {

        slideAtual++;

        if (slideAtual >= indicadores.length) {

            slideAtual = 0;

        }

        atualizarIndicadores();

    });

}


/* BOTÃO ANTERIOR */

if (botaoAnterior) {

    botaoAnterior.addEventListener("click", function() {

        slideAtual--;

        if (slideAtual < 0) {

            slideAtual = indicadores.length - 1;

        }

        atualizarIndicadores();

    });

}


/* CLICAR NAS BOLINHAS */

indicadores.forEach(function(indicador) {

    indicador.addEventListener("click", function() {

        slideAtual =
            Number(indicador.dataset.slide);

        atualizarIndicadores();

    });

});