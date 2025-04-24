document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Check for saved theme preference or use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');

        if (isDark) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
    });

    // Set base URL and API paths based on environment
    let baseUrl = 'http://localhost:4242/';
    let apiPrefix = 'ro/';
    let apiBase = baseUrl + apiPrefix;

    // Fetch portfolio data
    async function fetchPortfolioData() {
        try {
            const response = await fetch(apiBase + 'index.json');
            if (!response.ok) {
                throw new Error('Failed to fetch portfolio data');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching portfolio data:', error);
            return null;
        }
    }

    // Render about section
    function renderAboutSection(data) {
        const aboutSection = document.getElementById('about');
        const aboutLoading = document.getElementById('about-loading');

        if (!aboutSection || !aboutLoading) return;

        // Get the about data from the correct path in the JSON structure
        const aboutPage = data?.data?.['pages/about'];

        if (!aboutPage) {
            aboutSection.innerHTML = '<p>About information not available.</p>';
            return;
        }

        const aboutHTML = `
            <div class="header">
                <div>
                    <h1>${aboutPage.name}</h1>
                    <p class="role">${aboutPage.role}</p>
                </div>
                <div class="contact-info">
                    <div class="contact-item">
                        <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <a href="mailto:${aboutPage.email}">${aboutPage.email}</a>
                    </div>
                    <div class="contact-item">
                        <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${aboutPage.location}</span>
                    </div>
                </div>
            </div>
            <div class="prose">${aboutPage.body}</div>
        `;

        aboutSection.innerHTML = aboutHTML;
        aboutLoading.style.display = 'none';
    }

    // Render experience section
    function renderExperienceSection(data) {
        const experienceSection = document.getElementById('experience');
        const experienceLoading = document.getElementById('experience-loading');

        // Extract experience data from the correct structure
        const experienceEntries = Object.entries(data?.data || {})
            .filter(([key]) => key.startsWith('experience/'))
            .map(([_, value]) => value);

        if (experienceEntries.length === 0) {
            experienceSection.innerHTML = '<p>No experience information available.</p>';
            return;
        }

        let experienceHTML = '<h2>Experience</h2><div class="experience-list">';

        experienceEntries.forEach(exp => {
            experienceHTML += `
                <div class="card">
                    <div class="card-header">
                        <div>
                            <h3 class="card-title">${exp.title}</h3>
                            <p class="card-company">${exp.company} • ${exp.location}</p>
                            <p class="card-period">${exp.period}</p>
                        </div>
                    </div>
                    <div class="prose">${exp.body}</div>
                </div>
            `;
        });

        experienceHTML += '</div>';

        experienceSection.innerHTML = experienceHTML;
        experienceLoading.style.display = 'none';
    }

    // Render projects section
    function renderProjectsSection(data) {
        const projectsSection = document.getElementById('projects');
        const projectsLoading = document.getElementById('projects-loading');

        // Extract projects data from the correct structure
        const projectEntries = Object.entries(data?.data || {})
            .filter(([key]) => key.startsWith('projects/'))
            .map(([_, value]) => value);
        if (projectEntries.length === 0) {
            projectsSection.innerHTML = '<p>No project information available.</p>';
            return;
        }

        let projectsHTML = '<h2>Projects</h2><div class="projects-grid">';

        projectEntries.forEach(project => {
            projectsHTML += `
                <div class="card">
                    <div class="card-header">
                        <div>
                            <h3 class="card-title">
                                ${project.name}
                                <span class="project-year">${project.year}</span>
                            </h3>
                        </div>
                    </div>
                    <div class="prose">${project.body}</div>
                </div>
            `;
        });

        projectsHTML += '</div>';

        projectsSection.innerHTML = projectsHTML;
        projectsLoading.style.display = 'none';
    }

    // Initialize the application
    async function initApp() {
        const data = await fetchPortfolioData();

        if (data) {
            renderAboutSection(data);
            renderExperienceSection(data);
            renderProjectsSection(data);
        } else {
            document.querySelector('main').innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem;">
                    <h2>Unable to load portfolio data</h2>
                    <p>Please check your connection and try again.</p>
                </div>
            `;
        }
    }

    // Start the app
    initApp();
});
