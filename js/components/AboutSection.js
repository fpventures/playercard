// AboutSection.js - Renders the About section

export default class AboutSection {
    constructor(sectionId = 'about', loadingId = 'about-loading') {
        this.sectionElement = document.getElementById(sectionId);
        this.loadingElement = document.getElementById(loadingId);
    }

    render(data) {
        if (!this.sectionElement || !this.loadingElement) return;

        // Get the about data from the correct path in the JSON structure
        const aboutPage = data?.data?.['pages/about'];

        if (!aboutPage) {
            this.sectionElement.innerHTML = '<p>About information not available.</p>';
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

        this.sectionElement.innerHTML = aboutHTML;
        this.loadingElement.style.display = 'none';
    }
}