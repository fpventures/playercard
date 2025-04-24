// ExperienceSection.js - Renders the Experience section

export default class ExperienceSection {
    constructor(sectionId = 'experience', loadingId = 'experience-loading') {
        this.sectionElement = document.getElementById(sectionId);
        this.loadingElement = document.getElementById(loadingId);
    }

    render(data) {
        if (!this.sectionElement || !this.loadingElement) return;

        // Extract experience data from the correct structure
        const experienceEntries = Object.entries(data?.data || {})
            .filter(([key]) => key.startsWith('experience/'))
            .map(([_, value]) => value);

        if (experienceEntries.length === 0) {
            this.sectionElement.innerHTML = '<p>No experience information available.</p>';
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

        this.sectionElement.innerHTML = experienceHTML;
        this.loadingElement.style.display = 'none';
    }
}