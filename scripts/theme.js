// Theme management
class ThemeManager {
    constructor() {
        this.theme = this.getInitialTheme();
        this.init();
    }
    
    getInitialTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }
    
    init() {
        // Apply initial theme
        this.applyTheme(this.theme);
        
        // Wait for navigation to be created
        const checkNav = setInterval(() => {
            const themeToggle = document.querySelector('.theme-toggle');
            if (themeToggle) {
                clearInterval(checkNav);
                this.setupToggle(themeToggle);
                this.updateIcon();
            }
        }, 100);
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    this.theme = e.matches ? 'dark' : 'light';
                    this.applyTheme(this.theme);
                    this.updateIcon();
                }
            });
        }
    }
    
    setupToggle(button) {
        button.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
    
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.theme);
        this.updateIcon();
        localStorage.setItem('theme', this.theme);
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
    
    updateIcon() {
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        
        if (sunIcon && moonIcon) {
            if (this.theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();
