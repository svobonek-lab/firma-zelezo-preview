# Železo Admin – náhled systému

Statická prodejní/náhledová stránka podnikového systému běžícího na Synology NAS.
Dvě jazykové verze: čeština (`index.html`) a angličtina (`en/index.html`).

## Struktura

```
synology-preview/
├── index.html          # Česká verze
├── en/index.html       # Anglická verze
├── assets/
│   ├── style.css       # sdílený styl
│   └── app.js          # animovaný live náhled statusů
├── .github/workflows/  # GitHub Pages deploy (automaticky)
├── netlify.toml        # Netlify config
└── README.md
```

## Lokální test

Otevři `index.html` přímo v prohlížeči (stačí dvojklik) – funguje bez serveru.

## Nasadit na GitHub Pages (bezplatně, s veřejným odkazem)

1. Vytvoř public repo (npř. `firma-zelezo-preview`) na github.com
2. Nahraj obsah této složky do `main`:
   ```bash
   git init
   git add .
   git commit -m "Preview site"
   git branch -M main
   git remote add origin https://github.com/<UZIVATEL>/firma-zelezo-preview.git
   git push -u origin main
   ```
3. Otevři repo → **Settings → Pages**
4. Pod *Build and deployment → Source* zvol **GitHub Actions**
   (workflow `.github/workflows/pages.yml` se spustí automaticky po pushi)
5. Veřejná adresa: `https://<UZIVATEL>.github.io/firma-zelezo-preview/`

## Nasadit na Netlify (alternativa)

1. Nahraj repo na GitHub (viz výše) – nebo použij drag & drop složky na https://app.netlify.com/drop
2. Pro drag & drop: celá složka = web, veřejná adresa např. `https://xyz.netlify.app`
3. Propojení s GitHubem dá automatický redeploy na každý push.

## Poznámka

Nahraď `info@firma-zelezo.cz` a `admin.firma-zelezo.cz` za reálné údaje firmy.
