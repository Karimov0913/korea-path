# Korea Path 🇰🇷

**Student Relocation Assistant for Uzbekistan → South Korea.**  
**Интерактивный помощник для студентов из Узбекистана, переезжающих на учёбу в Южную Корею.**

![Korea Path screenshot](assets/screenshot.png)

## Features / Возможности

- D-2, D-4 и D-10 visa guide with a persistent document checklist
- 8 universities with city, tuition and TOPIK filters
- Preliminary admission chance calculator (GPA / TOPIK / IELTS)
- Monthly budget calculator and UZS / KRW / USD converter
- Practical guides for housing, SIM cards, banking, NHIS and transport
- Russian–Korean phrasebook, etiquette and halal guidance
- Leaflet + OpenStreetMap map with 36 real-world reference points
- Dark/light themes, site-wide search, share links and print-to-PDF
- Mobile-first responsive UI and Service Worker offline shell
- No build step and no framework

> Data is provided for planning. Always verify visa, tuition, admissions, addresses and fees on official websites before acting.

## Technologies

- HTML5, CSS3, vanilla JavaScript
- Leaflet 1.9.4 + OpenStreetMap
- LocalStorage, Service Worker, Web Share/Clipboard APIs
- System font stack and inline SVG

## Run locally

Opening `index.html` directly works for most features. For Service Worker and consistent module/CDN behavior, run a local server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Live site

https://Karimov0913.github.io/korea-path/

## Deploy to GitHub Pages

1. Push the repository to the `main` branch.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose `main` and `/ (root)`, then save.

All project paths are relative and ready for GitHub Pages.

## Author

**Javlonbek Karimov** — Navoi, Uzbekistan

## License

MIT License. See [LICENSE](LICENSE).
