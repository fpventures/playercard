# Player Card

Your résumé, live on the Internet. Version-controlled. Auto-deployed. Free.

It's as easy as editing text.

Just replace the examples with whatever you've convinced employers to pay you for.

## Why This Exists

| Option | Description                                                                                                            |
|--------|------------------------------------------------------------------------------------------------------------------------|
| **PDF résumés** | Obsolete the moment you get laid off; great for cogs who are doing the drill and keeping their heads down              |
| **LinkedIn** | Bloated garbage that puts you behind a paywall; great for people want to subjugate themslves to social media oligarchs |
| **This** | Your résumé, live, on the open Internet; great for people like you who are moving fast and open to new connections     |


## How It Works

You don't care. Go hunt some berries.

But if you do care:
1. `ro` gem converts your Markdown to JSON API
2. GitHub Actions builds it automatically
3. Static site displays your achievements, hosted by GitHub for free


## What's Included

* **Working code:** Already functional. Don't touch it. 
* **Non-repulsive design:** Clean typography. Mobile-ready. Hate it? Submit a pull request.
* **Content collections:** /pages/about, /experience, /projects
* **GitHub Actions:** Automated deployment. Push changes and they go live.

## Local Setup

If you want to see your changes locally before pushing them live, here's how.

Confused? Ask any half-competent AI to explain it to you.

Still confused? Perhaps getting your résumé on the Internet isn't your most pressing problem.

* **Install Ruby**
    * macOS: It's already there but outdated. Use `homebrew` or remain mediocre.
    * Windows: Enjoy your toy operating system and its 1990s terminal.
    * Linux: IYKYK

* **Install dependencies**
```
gem install bundler
bundle install
```

* **Run local server**
```
ro server
```

* **View your creation**
    1. Open index.html in a browser
       2. How? Right click → Open. Don't hurt yourself.
