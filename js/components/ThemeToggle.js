// ThemeToggle.js - Handles the theme switching functionality

export default class ThemeToggle {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.sunIcon = document.querySelector('.sun-icon');
        this.moonIcon = document.querySelector('.moon-icon');
        this.init();
    }

    init() {
        // Check for saved theme preference or use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark');
            this.sunIcon.style.display = 'none';
            this.moonIcon.style.display = 'block';
        }

        // Add event listener
        this.addEventListeners();
    }

    addEventListeners() {
        this.themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');

            if (isDark) {
                this.sunIcon.style.display = 'none';
                this.moonIcon.style.display = 'block';
                localStorage.setItem('theme', 'dark');
            } else {
                this.sunIcon.style.display = 'block';
                this.moonIcon.style.display = 'none';
                localStorage.setItem('theme', 'light');
            }
        });
    }
}