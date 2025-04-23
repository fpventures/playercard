document.addEventListener('DOMContentLoaded', function() {
  // Fetch the "About" page data for name, role, and about content
  fetch('api/ro/pages/about/index.json')
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
    });

  // Fetch and display Experience items
  fetch('api/ro/experience/index.json')
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
    });

  // Fetch and display Projects
  fetch('api/ro/projects/index.json')
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
    });
});