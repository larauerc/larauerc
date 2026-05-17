// ========== SLIDESHOW ==========
let slideIndex = 0;
let autoSlideTimer;
const SLIDE_INTERVAL = 5000; // 5 segundos (muda conforme queiras)

// Inicializar slideshow
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    if (totalSlides === 0) return;
    
    // Atualizar total de slides no indicador
    document.getElementById('total-slides').textContent = totalSlides;
    
    // Mostrar primeiro slide
    showSlide(0);
    
    // Iniciar auto-play
    autoSlideTimer = setInterval(() => {
        showSlide(++slideIndex);
    }, SLIDE_INTERVAL);
}

// Mostrar slide específico
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    
    if (totalSlides === 0) return;
    
    // Voltar ao início se chegar ao fim
    if (n >= totalSlides) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = totalSlides - 1;
    }
    
    // Remover class 'active' de todos os slides e dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Adicionar class 'active' ao slide atual
    slides[slideIndex].classList.add('active');
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
    
    // Atualizar indicador (4/10)
    document.getElementById('current-slide').textContent = slideIndex + 1;
    
    // Resetar timer do auto-play
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
        showSlide(++slideIndex);
    }, SLIDE_INTERVAL);
}

// Setas (Previous/Next)
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Ir para slide específico (dots)
function goToSlide(n) {
    showSlide(slideIndex = n);
}

// Reiniciar slideshow quando voltamos para home
document.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        // Página foi restaurada do cache
        slideIndex = 0;
        
        // Limpar timer anterior
        if (autoSlideTimer) {
            clearInterval(autoSlideTimer);
        }
        
        // Reiniciar slideshow se estivermos na homepage
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 0) {
            initSlideshow();
        }
    }
});

// Inicia quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    slideIndex = 0;
    initSlideshow();
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

// ========== LIMPAR TIMER AO SAIR DA PÁGINA ==========
window.addEventListener('beforeunload', function() {
    if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
    }
});
