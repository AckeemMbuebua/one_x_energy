# 07 — Technical Specification

## Stack

- Angular 22
- TypeScript strict
- standalone components
- Angular Router
- Tailwind CSS 4
- Vitest
- pnpm 10.33.0

## Architecture

```text
src/app/
├── core/
│   ├── config/
│   └── layout/
├── shared/
│   ├── components/
│   └── utils/
├── features/
│   ├── home/
│   ├── services/
│   ├── formations/
│   ├── materiels/
│   ├── realisations/
│   ├── about/
│   ├── contact/
│   └── not-found/
└── app.routes.ts
```

Ne pas créer d’abstraction sans besoin réel.

## Routage

Toutes les pages par route, lazy loading lorsque pertinent, title/meta, scroll au changement de page, 404.

## Composants partagés

Créer uniquement ceux réellement réutilisés : Header, Footer et éventuellement SectionHeading, ContactCTA, MediaFigure ou PageHero.

## Styles

Tokens centralisés. Pas de couleurs hex dispersées dans les composants.

Favoriser CSS Grid, Flexbox, `clamp()` et `minmax()`.

## Images

Dimensions explicites, lazy sous fold, `fetchpriority="high"` uniquement pour Hero si justifié, alt factuel.

## Accessibilité

- landmarks ;
- skip link ;
- clavier ;
- focus visible ;
- aria-current ;
- aria-expanded / aria-controls ;
- fermeture Échap ;
- alt ;
- contrastes ;
- touch targets >= 44 px.

## Responsive

Tester 320, 375, 768, 1024, 1440. Aucun overflow horizontal.

## Performance

Pas de librairie lourde, lazy routes, images compressées, fontes WOFF2 locales, pas de Google Fonts.

## Contact

Téléphone : `tel:+243850124755`

WhatsApp : `https://wa.me/243850124755`

Email : `mailto:onexenergyorganization@gmail.com`

## Déploiement

Compatible Vercel. Domaine et emails gérés séparément chez Hostinger.

## Validation

```bash
pnpm test
pnpm build
git diff --check
```
