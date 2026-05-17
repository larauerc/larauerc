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
