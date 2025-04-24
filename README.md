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



## What's Included

You don't care. Go hunt some berries.

But if you do care:

1. The [magnificent `ro` gem](https://github.com/ahoward/ro) converts your Markdown to JSON API
2. GitHub Actions deploy it automatically
3. Static api backend with a zero-dependency html/css/js frontend
4. Meaning: Résumé website that displays your achievements, hosted on GitHub Pages for free


## Getting Started

1.	Fork this repo via `Use this template → Create new repository`
2.	In your new repo’s `Settings → Pages`, pick your branch (e.g. main) and folder (/), then `Save`.
3.	Visit https://<your-username>.github.io/<your-repo>/ to see your live résumé.

## Local Setup

If you want to see your changes locally before pushing them live, here's how.

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

Still confused? [Visit us](https://www.fastpack.ventures) for a consultation.
