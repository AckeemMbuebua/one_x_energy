# 04 — Design System

## Direction

Le design ONE X ENERGY doit être technique, institutionnel, photographique, affirmé, lisible et moderne sans effet de mode excessif.

## Couleurs de marque

### Bleu nuit
`#04002D`

Usage : Hero sombre, footer, boutons principaux, titres structurants, surfaces institutionnelles.

### Orange
`#FF4D00`

Usage : CTA accent, repères, filets, focus et petits détails.

Ne pas utiliser l’orange comme grande surface dominante à répétition.

### Neutres

```css
--background: #FAFAF8;
--surface: #FFFFFF;
--surface-muted: #F3F3F0;
--foreground: #15141A;
--foreground-muted: #5F5E66;
--border: #D8D7DC;
--border-strong: #94929B;
```

### États

```css
--brand: #04002D;
--brand-hover: #151044;
--brand-active: #020018;
--brand-foreground: #FFFFFF;
--accent: #FF4D00;
--accent-hover: #E64700;
--accent-active: #DD4300;
--accent-foreground: #04002D;
--success: #207A4B;
--warning: #8A5700;
--danger: #B42318;
--focus-ring: #FF4D00;
```

## Contrastes

À privilégier : blanc sur bleu nuit ; bleu nuit sur orange.

À éviter : blanc courant sur orange ; orange comme texte courant sur blanc.

## Typographie

### Montserrat
Display, H1, H2, H3. Poids 600–700.

### Manrope
Body, navigation, boutons, formulaires, labels, légendes. Poids 400–700 selon besoin.

Fontes locales WOFF2, `font-display: swap`.

## Échelle

- H1 mobile : 34–40 px
- H1 desktop : 54–64 px
- H2 mobile : 30–34 px
- H2 desktop : 40–48 px
- H3 : 22–30 px
- Body : 16–18 px

## Layout

- conteneur desktop : ~1200–1240 px ;
- gouttières mobile : 16–20 px ;
- tablette : 24–32 px ;
- desktop : 32–48 px ;
- grille souple de 12 colonnes ;
- asymétrie éditoriale autorisée.

## Espacements

- mobile : 64–88 px vertical ;
- desktop : 96–144 px selon densité.

Éviter les grands vides injustifiés.

## Boutons

- principal sombre : bleu nuit + blanc ;
- accent : orange + bleu nuit ;
- secondaire : transparent + bordure forte.

Forme rectangulaire, rayon faible à modéré, pas de pilule. Touch target >= 44 px.

## Cartes

Les cartes ne sont pas le langage principal du site. Ne pas utiliser une card par valeur, par phrase ou pour les trois métiers.

## Images

Réelles, lisibles, liées au métier. Éviter photos IA, filigranes et overlays très opaques.

## Animations

Transitions courtes uniquement. Pas de parallaxe, GSAP, glow ou animation lettre par lettre.

## Responsive

Contrôler explicitement : 320, 375, 768, 1024, 1440 px.
