// =============================================
//  ModaBrasil – Main JS
// =============================================

// ── GALERIA DE PRODUTOS ─────────────────────
let currentImageIndex = {};
let galleryIntervals = {};

// Colectar datos de imágenes desde data attributes
const productsData = {};

document.addEventListener('DOMContentLoaded', () => {

    // Extrair dados das imagens dos cards
    document.querySelectorAll('.card__gallery').forEach(gallery => {
        const card = gallery.closest('.card');
        const productName = card.getAttribute('data-product');
        const images = [];
        let img = gallery.querySelector('.card__image');
        if (img) {
            images.push(img.src);
        }
        // Buscar outras imagens no data (alternativa: fazer requisição)
        productsData[productName] = {
            images: images,
            currentIndex: 0
        };
    });

    // ── Carrossel automático dos cards ──────────
    document.querySelectorAll('.card__gallery').forEach(gallery => {
        const productName = gallery.closest('.card').getAttribute('data-product');
        const dotsContainer = gallery.querySelector('.card__gallery-indicator');
        if (!dotsContainer) return;

        const dots = dotsContainer.querySelectorAll('.dot');
        const images = Array.from(gallery.querySelectorAll('.card__image'));
        
        if (images.length > 1) {
            currentImageIndex[productName] = 0;
            
            galleryIntervals[productName] = setInterval(() => {
                const nextIndex = (currentImageIndex[productName] + 1) % images.length;
                
                // Update image
                images.forEach((img, idx) => {
                    if (idx === nextIndex) {
                        img.classList.add('card__image--active');
                    } else {
                        img.classList.remove('card__image--active');
                    }
                });
                
                // Update dots
                dots.forEach((dot, idx) => {
                    if (idx === nextIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                currentImageIndex[productName] = nextIndex;
            }, 4000);
            
            // Dots click
            dots.forEach((dot, idx) => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    images.forEach((img, i) => {
                        if (i === idx) {
                            img.classList.add('card__image--active');
                        } else {
                            img.classList.remove('card__image--active');
                        }
                    });
                    dots.forEach((d, i) => {
                        if (i === idx) {
                            d.classList.add('active');
                        } else {
                            d.classList.remove('active');
                        }
                    });
                    currentImageIndex[productName] = idx;
                    
                    // Reset interval
                    clearInterval(galleryIntervals[productName]);
                    galleryIntervals[productName] = setInterval(() => {
                        const nextIndex = (currentImageIndex[productName] + 1) % images.length;
                        images.forEach((img, i) => {
                            if (i === nextIndex) {
                                img.classList.add('card__image--active');
                            } else {
                                img.classList.remove('card__image--active');
                            }
                        });
                        dots.forEach((d, i) => {
                            if (i === nextIndex) {
                                d.classList.add('active');
                            } else {
                                d.classList.remove('active');
                            }
                        });
                        currentImageIndex[productName] = nextIndex;
                    }, 4000);
                });
            });
        }
    });

    // ── Modal de Galeria ────────────────────────
    window.openModal = function(event, productName) {
        event.stopPropagation();
        const modal = document.getElementById('galleryModal');
        const modalImg = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDots = document.getElementById('modalDots');
        
        const card = document.querySelector(`[data-product="${productName}"]`);
        const images = [];
        
        // Coletar todas as imagens do card
        const cardImages = card.querySelectorAll('.card__image');
        cardImages.forEach(img => images.push(img.src));
        
        if (images.length === 0) return;
        
        // Setar primeira imagem
        modalImg.src = images[0];
        modalTitle.textContent = productName;
        
        // Gerar dots
        modalDots.innerHTML = '';
        images.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.className = 'dot' + (idx === 0 ? ' active' : '');
            dot.addEventListener('click', () => showModalImage(idx, images));
            modalDots.appendChild(dot);
        });
        
        // Armazenar imagens globalmente para navegação
        window.currentModalImages = images;
        window.currentModalIndex = 0;
        
        // Mostrar modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function() {
        const modal = document.getElementById('galleryModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    window.showModalImage = function(idx, images = null) {
        const images_list = images || window.currentModalImages;
        window.currentModalIndex = idx;
        document.getElementById('modalImage').src = images_list[idx];
        
        const dots = document.querySelectorAll('#modalDots .dot');
        dots.forEach(d => d.classList.remove('active'));
        dots[idx].classList.add('active');
    };

    window.nextImage = function() {
        const images = window.currentModalImages;
        const idx = (window.currentModalIndex + 1) % images.length;
        window.showModalImage(idx);
    };

    window.prevImage = function() {
        const images = window.currentModalImages;
        const idx = (window.currentModalIndex - 1 + images.length) % images.length;
        window.showModalImage(idx);
    };

    // Fechar modal ao clicar fora
    document.getElementById('galleryModal').addEventListener('click', (e) => {
        if (e.target.id === 'galleryModal') {
            window.closeModal();
        }
    });

    // Fechar modal ao pressionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeModal();
        }
    });

    // Navegação com setas do teclado
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('galleryModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowRight') window.nextImage();
            if (e.key === 'ArrowLeft') window.prevImage();
        }
    });

    // ── Smooth scroll para âncoras ──────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── Reveal on scroll (IntersectionObserver) ──
    const cards = document.querySelectorAll('.card, .info-card, .categoria__header');

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${i * 60}ms`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    cards.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // ── Estilo CSS para reveal (injetado via JS) ─
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity .5s ease, transform .5s ease;
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

});
