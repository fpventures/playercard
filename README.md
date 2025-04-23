# Minimalist Resume Template

_A professional, minimalist resume website powered by the `ro` Ruby gem. Write your resume content in Markdown, and let GitHub Pages handle the rest._

## Why use this template?

You want to showcase your resume on a personal site without fuss. Maybe you've looked at complex static site generators or CMS solutions and felt they were overkill for a simple resume. **This template puts you (and your content) first.** It lets you write your story in plain text (Markdown and YAML) and publishes it through a clean, responsive web page. No databases, no servers, and no unwieldy frameworks – just your content, beautifully presented. 

**Your resume should focus on you, not on the tooling.** With this project, you don't need to become a web developer or designer to have a polished online resume. If you can edit a text file, you can update your site. The design is intentionally minimalist and professional, so your experience and projects take center stage. Plus, by using GitHub Pages, your resume is hosted for free, with automatic updates every time you push changes.

## How it works

This template uses the [`ro` gem](https://rubygems.org/gems/ro) as a lightweight "headless CMS" behind the scenes. All of your resume content lives in the repository as version-controlled files. When you update your content, a GitHub Actions workflow runs `ro` to generate a static JSON API from your Markdown and YAML. The site itself is pure HTML, CSS, and JavaScript – it fetches the generated JSON files to display your information.

- **Content in Markdown/YAML:** You write your work experience, projects, and other info in easy-to-edit Markdown files (for rich text) and YAML files (for structured data like titles, dates, etc.). The content is organized into collections (e.g. `experience`, `projects`) under the `public/ro/` directory.
- **Automated build:** Whenever you push changes, GitHub Actions runs `ro build` to process those files. It converts your Markdown into HTML and outputs JSON files under `public/api/ro/`. This JSON is basically your resume data ready to be consumed.
- **Static frontend:** The website is a static HTML/JS/CSS frontend (served via GitHub Pages) that pulls in your content. The JavaScript fetches the JSON files and dynamically injects your data into the page. Because everything is static, the site is fast and secure. There's nothing to maintain – no servers or runtime code – and yet updating content is as simple as a git commit.

Everything lives in your GitHub repository. You get the benefits of version control for your content (so you can track changes to your resume over time), and you can even edit or add content using GitHub's web interface if you prefer. When you're ready to share your resume, GitHub Pages will publish it at a convenient URL for you.

## What is included?

This repository is structured as a GitHub template, which means you can click "**Use this template**" on GitHub to create your own copy. It comes with:

- **Fully working code:** All the HTML, CSS, JS, and content files are set up for you. The sample content (in `public/ro/`) includes example experiences and projects to illustrate the format. Replace them with your own information and you're good to go.
- **Minimal design:** A clean layout with readable typography is provided in `index.html` and `main.css`. The style is simple by default (mobile-friendly too), but you can easily tweak colors, fonts, or layout by editing the CSS. The focus is on clarity and professionalism.
- **Content collections:** We've organized the content into collections:
  - `pages/about` holds your **About Me** info (like a bio, plus contact details in YAML).
  - `experience` holds your work experience entries.
  - `projects` holds projects or portfolio items.
  - *(You can add more collections like `education` or `skills` similarly if needed.)*
- **GitHub Actions workflow:** The `.github/workflows/gh-pages.yml` file contains a complete Actions pipeline. It installs the `ro` gem, builds the static content (the JSON API), and deploys the site to GitHub Pages automatically. You don't have to run any manual build steps – just push your changes and within a minute or two, your live site updates.
- **README guide:** This README (you're reading it) is included to guide you through using the template and understanding how things fit together.

## Getting Started

**1. Create your repository from this template.** Use the "Use this template" button on GitHub (or fork the repo) to create your own repository. Clone it to your machine if you plan to work locally.

**2. Edit your resume content.** The main files to change are under `public/ro/`:
   - Open `public/ro/pages/about/attributes.yml` and update it with your name, role, email, location, etc.
   - Edit `public/ro/pages/about/body.md` to write a brief bio or summary about yourself.
   - For each job, edit or add a folder under `public/ro/experience/`. Each job should have an `attributes.yml` (for title, company, location, dates) and a `body.md` (for the description – you can use bullet points in Markdown to list achievements).
   - For each project, edit the files under `public/ro/projects/` similarly (with `name`, maybe a `year` or description in YAML, and use `body.md` for details).
   - Feel free to remove the example files that you don't need, or add new ones for additional experiences/projects. **Tip:** If you add a new collection or page, just create a similar folder structure and the site will pick it up as long as you fetch and display it in the HTML/JS.

**3. Review the site design (optional).** The default layout is in `index.html` (for the main resume page) and `about.html` (for the about page). You can customize the structure if you have HTML knowledge, but it's not required for basic use. Minor tweaks like section order or headings can be made here. Styles can be adjusted in `main.css` – for example, you can change the color scheme or font to personalize the look.

**4. Push your changes to GitHub.** Commit and push your updates. The included GitHub Actions workflow will automatically run. It will build your content with `ro` and deploy the updated site to GitHub Pages. You can check the Actions tab on your repository to see the progress – it should finish within a minute or so.

**5. Enable GitHub Pages and view your site.** For the first-time setup, go to your repository's **Settings > Pages**. Ensure that the branch is set to deploy from GitHub Actions (the action should have already published to a special `gh-pages` branch or to the GitHub Pages infrastructure). If everything is set up, you'll get a URL for your live site. By default it will be `https://<your-username>.github.io/<your-repo-name>/`. Share this link as your online resume!

*Note:* If you want your resume to appear at `your-username.github.io` (the root of your GitHub Pages), you can name your repository `<your-username>.github.io` when creating it. Otherwise, using any repository name will still work, just with the additional path.

## Customization

- **Adding sections or fields:** You can extend the YAML in your content files with any fields you like (for example, add a `technologies` list in a project’s attributes.yml). The JSON generated by `ro` will include them. You'd just need to adjust the HTML/JS to display those new fields. For instance, if you add a list of skills, you could create a new collection `public/ro/skills` or add it to the about page YAML and then update the HTML to render it.
- **Ordering items:** By default, items in a collection are rendered in alphabetical order of their folder names. You can control the order by naming the folders accordingly (for example, prefix experience folders with the year or a sequence number). Alternatively, you can modify the JavaScript to sort the fetched items by a date field in the YAML (e.g., add a `start_date` and sort by that). The template keeps it simple with alphabetical ordering for now.
- **Using images:** If you want to add a profile photo or project screenshots, you can place image files in an `assets` subfolder within the respective content folder. For example, put `profile.jpg` in `public/ro/pages/about/assets/` and it will be packaged as part of your site. You can then reference it in your Markdown (e.g., `![Profile Photo](/ro/pages/about/assets/profile.jpg)`). The build process will ensure the correct paths. Just be mindful of image size; you may want to enable Git LFS for large images.
- **Customization and maintenance:** Since this is a static site, you don't need to worry about upgrades or security patches for frameworks. You own the code, so you can modify the style or structure as you see fit. If you know HTML/CSS, you can completely redesign the template while still benefiting from the easy content management that `ro` provides.

## Feedback and contributions

This template is meant to make your life easier when building an online resume. If you spot any issues or have ideas for improvements, feel free to open an issue or contribute to the project. Good luck with your new resume site, and happy job hunting!