document.addEventListener('DOMContentLoaded', function() {
    // Determine if we're running on a local file
    const isLocalFile = window.location.protocol === 'file:';

    // Set base URL and API paths based on environment
    let baseUrl = 'http://localhost:4242/';
    let apiPrefix = 'ro/';
    let apiBase = baseUrl + apiPrefix

    // Fetch the "About" page data for name, role, and about content
    fetch(apiBase + 'pages/about/index.json')
        .then(response => response.json())
        .then(data => {
            // Populate name, role, and contact information
            document.getElementById('name').textContent = data.name;
            document.getElementById('role').textContent = data.role;
            document.getElementById('contact').innerHTML =
                `${data.location} | <a href="mailto:${data.email}">${data.email}</a>`;
            // Set page title dynamically
            document.title = `${data.name} - Resume`;
            if (document.body.id === 'index-page') {
                // On home page: show first paragraph of about content as summary
                let summaryHTML = '';
                if (data.body) {
                    const endIdx = data.body.indexOf('</p>');
                    summaryHTML = endIdx !== -1 ? data.body.substring(0, endIdx + 4) : data.body;
                }
                summaryHTML += ' <a href="about.html">Read more &raquo;</a>';
                document.getElementById('about-summary').innerHTML = summaryHTML;
            } else if (document.body.id === 'about-page') {
                // On about page: display the full about content
                document.getElementById('about-content').innerHTML = data.body;
            }
        })
        .catch(error => {
            console.error('Error fetching about data:', error);
            document.getElementById('about-summary') && (document.getElementById('about-summary').innerHTML =
                '<p>Error loading content. Please ensure the local server is running at <code>http://localhost:4242</code></p>');
            document.getElementById('about-content') && (document.getElementById('about-content').innerHTML =
                '<p>Error loading content. Please ensure the local server is running at <code>http://localhost:4242</code></p>');
        });

    // Fetch and display Experience items
    fetch(apiBase + 'experience/index.json')
        .then(response => response.json())
        .then(list => {
            const items = Array.isArray(list) ? list : (list.items || list.experience || []);
            items.forEach(item => {
                const expDiv = document.createElement('div');
                expDiv.className = 'experience-item';
                // Job title and company
                const title = document.createElement('h3');
                title.textContent = `${item.title} at ${item.company}`;
                expDiv.appendChild(title);
                // Period and location
                const meta = document.createElement('p');
                meta.className = 'meta';
                meta.textContent = `${item.period} | ${item.location}`;
                expDiv.appendChild(meta);
                // Job details (HTML list from Markdown)
                const details = document.createElement('div');
                details.className = 'details';
                details.innerHTML = item.body;
                expDiv.appendChild(details);
                // Append to experience section
                document.getElementById('experience-list').appendChild(expDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching experience data:', error);
            document.getElementById('experience-list') && (document.getElementById('experience-list').innerHTML =
                '<p>Error loading content. Please ensure the local server is running at <code>http://localhost:4242</code></p>');
        });

    // Fetch and display Projects
    fetch(apiBase + 'projects/index.json')
        .then(response => response.json())
        .then(list => {
            const items = Array.isArray(list) ? list : (list.items || list.projects || []);
            items.forEach(item => {
                const projDiv = document.createElement('div');
                projDiv.className = 'project-item';
                // Project name (and year if available)
                const title = document.createElement('h3');
                title.textContent = item.name;
                if (item.year) {
                    const yearSpan = document.createElement('span');
                    yearSpan.className = 'year';
                    yearSpan.textContent = ` (${item.year})`;
                    title.appendChild(yearSpan);
                }
                projDiv.appendChild(title);
                // Project description (HTML from Markdown)
                const details = document.createElement('div');
                details.className = 'details';
                details.innerHTML = item.body;
                projDiv.appendChild(details);
                // Append to projects section
                document.getElementById('projects-list').appendChild(projDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching projects data:', error);
            document.getElementById('projects-list') && (document.getElementById('projects-list').innerHTML =
                '<p>Error loading content. Please ensure the local server is running at <code>http://localhost:4242</code></p>');
        });
});
