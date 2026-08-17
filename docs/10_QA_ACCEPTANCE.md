# 10 — QA & Acceptance Criteria

## Fonctionnel

- [ ] Sept pages accessibles.
- [ ] Route 404 fonctionnelle.
- [ ] Header et Footer globaux.
- [ ] Téléphone, WhatsApp et email fonctionnels.
- [ ] Aucun faux lien social.

## Contenu

- [ ] Aucun chiffre fictif.
- [ ] Aucun témoignage fictif.
- [ ] Aucun partenaire fictif.
- [ ] Aucun prix inventé.
- [ ] Aucun programme de formation inventé.
- [ ] Aucun stock fictif.
- [ ] Aucun lieu ou adresse inventé.
- [ ] Aucun slogan marketing générique dominant.
- [ ] Trois activités clairement différenciées.

## Direction visuelle

- [ ] Inspiration visible de la référence sans copie.
- [ ] Bleu nuit réellement perceptible.
- [ ] Orange utilisé comme accent.
- [ ] Photographies au cœur du design.
- [ ] Pas de succession de cards.
- [ ] Arrondis contenus.
- [ ] Aucun glow/glassmorphism.
- [ ] Aucun cliché graphique de construction lourde non pertinent.
- [ ] Hero fort.
- [ ] Logo lisible.

## Responsive

Tester : 320, 375, 768, 1024, 1440.

À 768 px : CTA Header non étiré, aucun grand vide injustifié, vraie composition tablette.

## Accessibilité

- [ ] skip link ;
- [ ] landmarks ;
- [ ] focus visible ;
- [ ] menu clavier ;
- [ ] Échap ;
- [ ] aria-current ;
- [ ] aria-expanded ;
- [ ] aria-controls ;
- [ ] alt ;
- [ ] contrastes ;
- [ ] touch targets >= 44 px ;
- [ ] prefers-reduced-motion.

## Performance

- [ ] routes lazy ;
- [ ] images optimisées ;
- [ ] fontes WOFF2 locales ;
- [ ] pas de Google Fonts ;
- [ ] aucune dépendance lourde inutile ;
- [ ] aucune erreur console.

## SEO

- [ ] title unique ;
- [ ] meta description ;
- [ ] H1 unique ;
- [ ] Open Graph minimal ;
- [ ] robots.txt ;
- [ ] sitemap.

## Code

- [ ] TypeScript strict ;
- [ ] aucun `any` injustifié ;
- [ ] architecture simple ;
- [ ] pas de couleurs hex dispersées ;
- [ ] pas de bibliothèque UI ajoutée.

## Validation finale

```bash
pnpm test
pnpm build
git diff --check
```

Arbre Git propre et commits poussés sur `origin/main`.
