// Dynamic Counter Animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (element.dataset.suffix) {
            element.textContent = Math.floor(current) + element.dataset.suffix;
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for triggering animations
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Portfolio Carousel Functionality
class PortfolioCarousel {
    constructor() {
        this.carousel = document.querySelector('.portfolio-carousel');
        this.track = document.querySelector('.carousel-track');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.indicators = document.querySelectorAll('.indicator');
        
        this.currentSlide = 0;
        this.slidesToShow = this.getSlidesToShow();
        this.totalSlides = this.slides.length;
        this.isTransitioning = false;
        
        this.init();
    }
    
    getSlidesToShow() {
        const width = window.innerWidth;
        if (width < 769) return 1;
        if (width < 1025) return 2;
        return 3;
    }
    
    init() {
        if (!this.carousel) return;
        
        this.cloneSlides();
        this.updateCarousel();
        this.bindEvents();
        this.updateIndicators();
        
        // Auto-play
        this.startAutoPlay();
    }
    
    cloneSlides() {
        // Clone slides for infinite effect
        const slidesToClone = Math.max(this.slidesToShow, 2);
        
        // Clone first few slides and append to end
        for (let i = 0; i < slidesToClone; i++) {
            const clone = this.slides[i].cloneNode(true);
            clone.classList.add('cloned');
            this.track.appendChild(clone);
        }
        
        // Clone last few slides and prepend to beginning
        for (let i = this.totalSlides - slidesToClone; i < this.totalSlides; i++) {
            const clone = this.slides[i].cloneNode(true);
            clone.classList.add('cloned');
            this.track.insertBefore(clone, this.track.firstChild);
        }
        
        // Update current position to account for prepended clones
        this.currentSlide = slidesToClone;
        this.track.style.transform = `translateX(-${this.currentSlide * (100 / this.slidesToShow)}%)`;
    }
    
    bindEvents() {
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pause auto-play on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Touch/swipe support
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoPlay();
        });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            isDragging = false;
            this.startAutoPlay();
        });
        
        // Handle transition end for infinite loop
        this.track.addEventListener('transitionend', () => {
            this.handleTransitionEnd();
        });
        
        // Resize handler
        window.addEventListener('resize', () => {
            const newSlidesToShow = this.getSlidesToShow();
            if (newSlidesToShow !== this.slidesToShow) {
                this.slidesToShow = newSlidesToShow;
                
                // For mobile, reset to first slide but allow normal carousel function
                if (window.innerWidth <= 768) {
                    const slidesToClone = Math.max(this.slidesToShow, 2);
                    this.currentSlide = slidesToClone; // Reset to first real slide
                    this.track.style.transition = 'none';
                    this.updateCarousel();
                    setTimeout(() => {
                        this.track.style.transition = 'transform 0.5s ease';
                    }, 10);
                } else {
                    this.resetCarousel();
                }
                this.updateIndicators();
            }
        });
    }
    
    updateCarousel() {
        const translateX = -(this.currentSlide * (100 / this.slidesToShow));
        this.track.style.transform = `translateX(${translateX}%)`;
    }
    
    resetCarousel() {
        // Remove cloned slides
        const clonedSlides = this.track.querySelectorAll('.cloned');
        clonedSlides.forEach(slide => slide.remove());
        
        // Reset position
        this.currentSlide = 0;
        this.track.style.transition = 'none';
        this.track.style.transform = 'translateX(0%)';
        
        // Re-clone slides for new viewport
        this.cloneSlides();
        
        // Restore transition
        setTimeout(() => {
            this.track.style.transition = 'transform 0.5s ease';
            this.updateCarousel();
            this.updateIndicators();
        }, 10);
    }
    
    nextSlide() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.currentSlide++;
        this.updateCarousel();
        this.updateIndicators();
    }
    
    prevSlide() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.currentSlide--;
        this.updateCarousel();
        this.updateIndicators();
    }
    
    goToSlide(slideIndex) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        const slidesToClone = Math.max(this.slidesToShow, 2);
        this.currentSlide = slideIndex + slidesToClone;
        this.updateCarousel();
        this.updateIndicators();
    }
    
    handleTransitionEnd() {
        this.isTransitioning = false;
        const slidesToClone = Math.max(this.slidesToShow, 2);
        
        // If we're past the last real slide, jump to the beginning
        if (this.currentSlide >= this.totalSlides + slidesToClone) {
            this.track.style.transition = 'none';
            this.currentSlide = slidesToClone;
            this.updateCarousel();
            setTimeout(() => {
                this.track.style.transition = 'transform 0.5s ease';
            }, 10);
        }
        
        // If we're before the first real slide, jump to the end
        if (this.currentSlide < slidesToClone) {
            this.track.style.transition = 'none';
            this.currentSlide = this.totalSlides + slidesToClone - 1;
            this.updateCarousel();
            setTimeout(() => {
                this.track.style.transition = 'transform 0.5s ease';
            }, 10);
        }
    }
    
    updateIndicators() {
        const slidesToClone = Math.max(this.slidesToShow, 2);
        const realSlideIndex = (this.currentSlide - slidesToClone + this.totalSlides) % this.totalSlides;
        
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === realSlideIndex);
        });
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000); // 4 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Portfolio Filter Functionality
class PortfolioFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.portfolioCards = document.querySelectorAll('.portfolio-card');
        this.resultsCount = document.querySelector('.results-count .count');
        
        if (this.filterButtons.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.setActiveButton(button);
                this.filterProjects(button.dataset.filter);
            });
        });
    }
    
    setActiveButton(activeButton) {
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }
    
    filterProjects(filter) {
        let visibleCount = 0;
        
        this.portfolioCards.forEach(card => {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Update results count
        if (this.resultsCount) {
            this.resultsCount.textContent = visibleCount;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCounters();
    
    // Initialize carousel if on homepage
    if (document.querySelector('.portfolio-carousel')) {
        new PortfolioCarousel();
    }
    
    // Initialize portfolio filters if on portfolio page
    if (document.querySelector('.portfolio-filters')) {
        new PortfolioFilter();
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Removed parallax effect - causing scroll issues