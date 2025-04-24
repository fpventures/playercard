// ProjectsSection.js - Renders the Projects section

export default class ProjectsSection {
    constructor(sectionId = 'projects', loadingId = 'projects-loading') {
        this.sectionElement = document.getElementById(sectionId);
        this.loadingElement = document.getElementById(loadingId);
    }

    render(data) {
        if (!this.sectionElement || !this.loadingElement) return;

        // Extract projects data from the correct structure
        const projectEntries = Object.entries(data?.data || {})
            .filter(([key]) => key.startsWith('projects/'))
            .map(([_, value]) => value);
            
        if (projectEntries.length === 0) {
            this.sectionElement.innerHTML = '<p>No project information available.</p>';
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

        this.sectionElement.innerHTML = projectsHTML;
        this.loadingElement.style.display = 'none';
    }
}