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

You don't care. Go hunt berries.

Still here, really? Ok, the TL;DR is:

1. The [magnificent `ro` gem](https://github.com/ahoward/ro) converts your Markdown to JSON API
2. GitHub Actions deploy it automatically
3. Static api backend with a zero-dependency html/css/js frontend


## What It Is

Your résumé on the wide open Internet. Free as in beer. Free as in freedom.


## Getting Started

1. Hit "Use this template" to create your own copy of this repo.
2. Go to your new repo’s Settings → Pages and choose GitHub Actions as the source.
3. Your résumé site will be live at `https://<your-username>.github.io/<your-repo>/`

## Making It Your Own

Write about yourself.

- Edit the files in `public/ro` to reflect your experience, personal details, and projects.
  - You can add or remove files in those directories.
  - Just follow the format of the examples.
- Commit your changes and push them to GitHub
- 10 seconds later, visit `https://<your-username>.github.io/<your-repo>/`

> Note: Do not edit files in `public/api`. Those are automatically generated.

## Local Setup

If you must see your changes locally before pushing them live:

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
bin/dev
```

* **View your creation**
    1. visit http://localhost:4242 in a browser. Don't hurt yourself.

## That's all
Confused? Ask any half-competent AI to explain it to you.

Still confused? [Hire us](https://fastpack.ventures) for a consultation.
