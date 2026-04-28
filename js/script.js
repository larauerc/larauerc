// ========== SLIDESHOW ==========
let slideIndex = 0;
let slideshowTimeout = null;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    // Se não há slides, saímos da função (não está na homepage)
    if (slides.length === 0) return;

    slides.forEach(slide => slide.style.display = 'none');
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    
    // Limpar timeout anterior antes de criar um novo
    if (slideshowTimeout) {
        clearTimeout(slideshowTimeout);
    }
    
    slideshowTimeout = setTimeout(showSlides, 5000); // Muda de imagem a cada 5 segundos
}

// Reiniciar slideshow quando voltamos para home
document.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        // Página foi restaurada do cache
        slideIndex = 0; // Reset do índice
        
        // Limpar timeout anterior
        if (slideshowTimeout) {
            clearTimeout(slideshowTimeout);
        }
        
        // Reiniciar slideshow se estivermos na homepage
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 0) {
            showSlides();
        }
    }
});

// Inicia o slideshow quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    slideIndex = 0; // Reiniciar índice
    showSlides();
    setupMobileMenu();
    setupFormSubmission();
});

// ========== MOBILE MENU ==========
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animar hamburger
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transition = '0.3s';
            });
        });

        // Fechar menu ao clicar num link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

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

// ========== SCROLL LOCK (evitar scroll nas páginas fullpage) ==========
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden';
});

// ========== ADICIONAR EFEITO DE SCROLL SUAVE ENTRE PÁGINAS ==========
window.addEventListener('beforeunload', function() {
    // Limpar timeout ao sair da página
    if (slideshowTimeout) {
        clearTimeout(slideshowTimeout);
    }
    window.scrollTo(0, 0);
});