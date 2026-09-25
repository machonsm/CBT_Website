import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const origin = 'https://machoncbt.pl';
const portraitUrl = `${origin}/src/assets/images/sandra-machon-portrait.jpg`;
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const pages = [
  { lang: 'pl', file: 'index.html', url: `${origin}/`, title: 'Psychoterapia CBT online – Sandra Machoń', description: 'Psychoterapia poznawczo-behawioralna dorosłych online, po polsku i angielsku. Sandra Machoń. Poznaj podejście, cennik i umów pierwszą konsultację.' },
  { lang: 'en', file: 'en.html', url: `${origin}/en.html`, title: 'Online CBT Therapy in English & Polish – Sandra Machoń', description: 'Online cognitive behavioural psychotherapy for adults in English and Polish with Sandra Machoń. Explore the approach, fees and book an initial consultation.' },
];
const privacyUrl = `${origin}/polityka-prywatnosci/`;
const termsUrl = `${origin}/zasady-wspolpracy/`;
const goatCounterScript = '<script data-goatcounter="https://machoncbt.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>';
// Keep asset declarations in index.html as the single source for both pages.
const previous = await readFile(path.join(root, 'index.html'), 'utf8');
const previousHead = previous.slice(0, previous.indexOf('</head>'));
const assets = [...previousHead.matchAll(/<link\b[^>]*(?:rel="(?:icon|preconnect|preload|stylesheet)")[^>]*>|<script\b[^>]*\bsrc="[^"]+"[^>]*><\/script>/g)].map(m => m[0]).join('\n    ');
for (const page of pages) {
  const context = vm.createContext({ window: { __STATIC_BUILD__: true }, document: { documentElement: { lang: page.lang }, getElementById: () => null } });
  for (const file of ['site-content.js', 'cbt-model.js', 'app.js']) {
    vm.runInContext(await readFile(path.join(root, 'static', file), 'utf8'), context, { filename: file });
  }
  const copy = context.window.SiteContent[page.lang.toUpperCase()];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/`, name: 'Sandra Machoń – Terapia CBT Online', inLanguage: ['pl', 'en'] },
      { '@type': 'Person', '@id': `${origin}/#sandra-machon`, name: 'Sandra Machoń', url: `${origin}/#about`, image: portraitUrl, email: 'sandramachon.cbt@gmail.com', telephone: '+48720427426', knowsLanguage: ['pl', 'en'], description: copy.about.paragraphs[0] },
      { '@type': 'WebPage', '@id': `${page.url}#webpage`, url: page.url, name: page.title, description: page.description, inLanguage: page.lang, isPartOf: { '@id': `${origin}/#website` }, about: { '@id': `${origin}/#sandra-machon` }, mainEntity: { '@id': `${page.url}#service` } },
      { '@type': 'Service', '@id': `${page.url}#service`, name: page.lang === 'pl' ? 'Psychoterapia poznawczo-behawioralna online dla dorosłych' : 'Online cognitive behavioural psychotherapy for adults', serviceType: 'Cognitive behavioural psychotherapy', provider: { '@id': `${origin}/#sandra-machon` }, url: `${page.url}#therapy`, availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${page.url}#contact`, servicePhone: { '@type': 'ContactPoint', telephone: '+48720427426', availableLanguage: ['Polish', 'English'] } } },
    ],
  };
  const html = `<!doctype html>
<html lang="${page.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escape(page.title)}</title>
    <meta name="description" content="${escape(page.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${page.url}" />
    <link rel="alternate" hreflang="pl" href="${origin}/" />
    <link rel="alternate" hreflang="en" href="${origin}/en.html" />
    <link rel="alternate" hreflang="x-default" href="${origin}/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sandra Machoń – Terapia CBT Online" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${page.url}" />
    <meta property="og:locale" content="${page.lang === 'pl' ? 'pl_PL' : 'en_GB'}" />
    <meta property="og:locale:alternate" content="${page.lang === 'pl' ? 'en_GB' : 'pl_PL'}" />
    <meta property="og:image" content="${portraitUrl}" />
    <meta property="og:image:alt" content="Sandra Machoń" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(page.title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <meta name="twitter:image" content="${portraitUrl}" />
    <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>
    ${assets}
    <noscript><style>
      [data-reveal] { opacity: 1 !important; transform: none !important; }
      .landing-scroll { height: auto !important; }
      .landing-scroll .hero { position: relative !important; }
      .landing-letter { background: none !important; color: #211ea3 !important; -webkit-text-fill-color: #211ea3 !important; }
      [data-mobile-toggle], [data-help-toggle], .abc-model { display: none !important; }
      .help-card-art { display: none !important; }
      *, *::before, *::after { animation: none !important; }
    </style></noscript>
  </head>
  <body>
    <!-- Generated by npm run build:seo. Edit static/app.js and static/site-content.js, then rebuild. -->
    <div id="site">${context.window.__renderPage()}</div>
    <noscript><p>${page.lang === 'pl' ? 'Pytania przed konsultacją:' : 'Questions before your consultation:'} <a href="mailto:sandramachon.cbt@gmail.com">sandramachon.cbt@gmail.com</a> ${page.lang === 'pl' ? 'lub telefon:' : 'or call:'} <a href="tel:+48720427426">(+48) 720 427 426</a>.</p></noscript>
    ${goatCounterScript}
  </body>
</html>
`;
  await writeFile(path.join(root, page.file), html.replace(/[ \t]+$/gm, ''));
}
const renderLegalText = value => escape(value)
  .replace(/sandramachon\.cbt@gmail\.com/g, '<a href="mailto:sandramachon.cbt@gmail.com">sandramachon.cbt@gmail.com</a>')
  .replace(/machoncbt\.pl\/polityka-prywatnosci(?:#kontakt-awaryjny)?/g, match => {
    const destination = match.includes('#') ? `${privacyUrl}#kontakt-awaryjny` : privacyUrl;
    return `<a href="${destination}">${match}</a>`;
  });
function renderLegalMarkdown(source) {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let sectionOpen = false;
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index].trim();
    if (!line) continue;
    if (line.startsWith('# ')) {
      html.push(`<h1>${escape(line.slice(2))}</h1>`);
    } else if (line.startsWith('## ')) {
      if (sectionOpen) html.push('</section>');
      const id = line.includes('Kontakt w sytuacji nagłej') ? ' id="kontakt-awaryjny"' : '';
      html.push(`<section${id}><h2>${escape(line.slice(3))}</h2>`);
      sectionOpen = true;
    } else if (line.startsWith('- ')) {
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(`<li>${renderLegalText(lines[index].trim().slice(2))}</li>`);
        index++;
      }
      index--;
      html.push(`<ul>${items.join('')}</ul>`);
    } else {
      html.push(`<p>${renderLegalText(line)}</p>`);
    }
  }
  if (sectionOpen) html.push('</section>');
  return html.join('\n    ');
}
function renderLegalPage({ title, description, url, content }) {
  return `<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escape(title)} | Sandra Machoń</title>
    <meta name="description" content="${escape(description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="../src/assets/images/logo.png" />
    <link rel="preload" href="../static/fonts/instrument-serif/InstrumentSerif-Regular.ttf" as="font" type="font/ttf" crossorigin />
    <style>
      @font-face { font-family: "Instrument Serif"; src: url("../static/fonts/instrument-serif/InstrumentSerif-Regular.ttf") format("truetype"); font-display: swap; }
      :root { color-scheme: light; --navy: #211ea3; --paper: #f3f4ef; --pink: #ffcddf; }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; background: var(--paper); color: var(--navy); font: 16px/1.75 system-ui, -apple-system, "Segoe UI", sans-serif; }
      header { border-bottom: 1px solid #211ea333; }
      header > div, main, footer > div { width: min(calc(100% - 2.5rem), 54rem); margin-inline: auto; }
      header > div { min-height: 4.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
      header a { font-weight: 700; text-decoration: none; }
      a { color: inherit; text-underline-offset: .2em; overflow-wrap: anywhere; }
      a:hover { color: #f1562c; }
      a:focus-visible { outline: 2px solid #f1562c; outline-offset: 4px; }
      main { padding-block: clamp(2.5rem, 5vw, 5rem) 5rem; }
      h1, h2 { font-family: "Instrument Serif", Georgia, serif; font-weight: 400; line-height: 1.1; text-wrap: balance; }
      h1 { margin: 0 0 1rem; font-size: clamp(3rem, 7vw, 5rem); }
      main > p:first-of-type { margin-bottom: 3rem; font-size: .9rem; }
      section { padding-block: 2rem; border-top: 1px solid #211ea333; scroll-margin-top: 2rem; }
      h2 { margin: 0 0 1.3rem; font-size: clamp(2rem, 4vw, 2.8rem); }
      p { margin: 0 0 1.15rem; }
      li { padding-left: .25rem; }
      ul { margin: 0 0 1.3rem; padding-left: 1.4rem; }
      footer { padding: 2rem 0; background: var(--pink); font-size: .9rem; }
      footer > div { display: flex; justify-content: space-between; flex-wrap: wrap; gap: .5rem 1.5rem; }
      @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
    </style>
  </head>
  <body>
    <header><div><a href="../">Sandra Machoń · Terapia CBT Online</a><a href="../">Powrót do strony głównej ↑</a></div></header>
    <main>${content}</main>
    <footer><div><span>© ${new Date().getFullYear()} Sandra Machoń</span><a href="mailto:sandramachon.cbt@gmail.com">sandramachon.cbt@gmail.com</a></div></footer>
    ${goatCounterScript}
  </body>
</html>
`;
}
const legalPages = [
  { folder: 'polityka-prywatnosci', source: 'privacy-policy.md', title: 'Polityka prywatności', description: 'Polityka prywatności strony machoncbt.pl: administrator danych, cele przetwarzania, usługi zewnętrzne oraz prawa osób, których dane dotyczą.', url: privacyUrl },
  { folder: 'zasady-wspolpracy', source: 'terms-of-cooperation.md', title: 'Zasady współpracy w psychoterapii online', description: 'Zasady psychoterapii online: pierwsza konsultacja, czas i cena sesji, płatności, odwoływanie spotkań, poufność oraz bezpieczeństwo.', url: termsUrl },
];
for (const page of legalPages) {
  const source = await readFile(path.join(root, page.source), 'utf8');
  const html = renderLegalPage({ ...page, content: renderLegalMarkdown(source) });
  await mkdir(path.join(root, page.folder), { recursive: true });
  await writeFile(path.join(root, page.folder, 'index.html'), html);
}
await writeFile(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...pages.map(page => page.url), ...legalPages.map(page => page.url)].map(url => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`);
if (process.argv.includes('--dist')) {
  const dist = path.join(root, 'dist');
  await mkdir(dist, { recursive: true });
  for (const file of ['index.html', 'en.html', ...legalPages.map(page => page.folder), 'robots.txt', 'sitemap.xml', 'static', 'src/assets']) {
    await cp(path.join(root, file), path.join(dist, file), { recursive: true });
  }
  await cp(path.join(root, 'src/components'), path.join(dist, 'src/components'), { recursive: true, filter: source => !/\.(tsx?|jsx?)$/i.test(source) });
}
console.log('Generated Polish and English HTML, legal pages, metadata, robots.txt and sitemap.xml.');
