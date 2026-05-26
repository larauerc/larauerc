// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar num link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========== FORM SUBMISSION ==========
function setupFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui pode adicionar lógica para enviar o formulário
            alert('Obrigado pelo seu contacto! Em breve responderemos.');
            
            // Limpar formulário
            contactForm.reset();
        });
    }
}

// ========== LIMPAR TIMER AO SAIR DA PÁGINA ==========
window.addEventListener('beforeunload', function() {
    if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos necessários
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-ampliada");
    const closeModal = document.querySelector(".close-modal");

    // Adiciona o evento de clique a cada imagem da galeria
    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex"; // Mostra o modal (usando flex para centrar a imagem)
            modalImg.src = this.src;      // Passa o caminho da imagem clicada para o modal
            modalImg.alt = this.alt;      // Copia o texto alternativo para acessibilidade
        });
    });

    // Fecha o modal ao clicar no botão "X"
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Fecha o modal se o utilizador clicar no fundo escuro (fora da imagem)
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // BÓNUS: Fecha o modal se carregar na tecla "Esc" do teclado
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
});