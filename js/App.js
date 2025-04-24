// App.js - Main application entry point

import ThemeToggle from './components/ThemeToggle.js';
import ApiService from './services/ApiService.js';
import AboutSection from './components/AboutSection.js';
import ExperienceSection from './components/ExperienceSection.js';
import ProjectsSection from './components/ProjectsSection.js';

export default class App {
    constructor() {
        // Initialize components
        this.themeToggle = new ThemeToggle();
        this.apiService = new ApiService();
        this.aboutSection = new AboutSection();
        this.experienceSection = new ExperienceSection();
        this.projectsSection = new ProjectsSection();
    }

    async init() {
        // Fetch data from API
        const data = await this.apiService.fetchPortfolioData();

        if (data) {
            // Render all sections with the fetched data
            this.aboutSection.render(data);
            this.experienceSection.render(data);
            this.projectsSection.render(data);
        } else {
            // Display error message if data fetch fails
            document.querySelector('main').innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem;">
                    <h2>Unable to load portfolio data</h2>
                    <p>Please check your connection and try again.</p>
                </div>
            `;
        }
    }
}