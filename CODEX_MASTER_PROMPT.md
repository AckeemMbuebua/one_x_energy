# Prompt maître Codex — Reconstruction complète V1 ONE X ENERGY

Nous allons reconstruire complètement la V1 du site vitrine ONE X ENERGY.

Cette fois-ci, ne travaille pas section par section avec attente de validation.

Tu dois produire une V1 complète, cohérente et prête à être auditée dans son ensemble.

La référence visuelle pertinente est fournie automatiquement avec cette tâche.

## 1. Avant toute modification

Inspecte le dépôt et relis intégralement :

- `AGENTS.md`
- `docs/00_PROJECT_BRIEF.md`
- `docs/01_INFORMATION_ARCHITECTURE.md`
- `docs/02_EDITORIAL_GUIDE.md`
- `docs/03_CONTENT_SPEC.md`
- `docs/04_DESIGN_SYSTEM.md`
- `docs/05_VISUAL_REFERENCE_GUIDE.md`
- `docs/06_PAGE_BLUEPRINTS.md`
- `docs/07_TECHNICAL_SPEC.md`
- `docs/08_MEDIA_GUIDE.md`
- `docs/09_SEO_SPEC.md`
- `docs/10_QA_ACCEPTANCE.md`

Inspecte ensuite :

- le code actuel ;
- le Header ;
- le Footer ;
- l’ancien Hero ;
- les routes ;
- les tests ;
- les styles ;
- les fontes ;
- les médias ;
- la référence visuelle jointe automatiquement.

Ne code pas avant cette inspection.

## 2. Objectif

Refaire le site vitrine complet ONE X ENERGY avec :

- une vraie direction visuelle ;
- une cohérence forte avec la référence fournie ;
- l’identité ONE X ENERGY ;
- une ligne éditoriale naturelle ;
- un bon responsive ;
- toutes les pages V1 ;
- SEO ;
- accessibilité ;
- tests ;
- code prêt pour Vercel.

Le résultat précédent peut être remplacé visuellement.

Tu peux réutiliser architecture, routage, logique accessible, tests utiles, tokens, fontes et assets.

Tu peux supprimer ou réécrire les composants visuels qui ne conviennent plus.

## 3. Référence visuelle

La référence doit influencer réellement :

- force du Hero ;
- présence photographique ;
- contraste ;
- rythme ;
- proportions ;
- alternance clair/sombre ;
- densité de la page ;
- relation image/contenu.

Mais ne la copie pas littéralement.

Ne reproduis pas marque, textes, statistiques, silhouettes, grues, engrenages, illustrations propriétaires, découpe reconnaissable, cartes identiques ou chiffres fictifs.

## 4. Identité ONE X ENERGY

- bleu nuit `#04002D`
- orange `#FF4D00`
- Montserrat pour les titres
- Manrope pour le corps et l’UI

L’orange reste un accent. Le bleu nuit doit installer l’identité.

## 5. Ligne éditoriale

Utilise `docs/03_CONTENT_SPEC.md` comme source principale.

Tu peux adapter légèrement les longueurs pour la mise en page sans changer les faits.

Ne complète jamais une information manquante par supposition.

Ne crée pas de marketing générique.

## 6. Pages

Construis intégralement :

- `/`
- `/services`
- `/formations`
- `/materiels`
- `/realisations`
- `/a-propos`
- `/contact`
- `404`

Le contenu et les sections sont définis dans `docs/06_PAGE_BLUEPRINTS.md`.

## 7. Accueil

Doit comprendre au minimum :

1. Header
2. Hero
3. Présentation ONE X ENERGY / trois métiers
4. Électrification
5. Formation
6. Matériels
7. Réalisations si médias exploitables
8. Valeurs
9. Contact final
10. Footer

Ne crée pas de bloc statistiques.

Ne transforme pas les trois métiers en trois cards identiques.

## 8. Header et Hero

Le Header précédent était techniquement correct mais visuellement trop neutre.

Le nouveau Header doit mieux afficher le logo, avoir plus de présence et éviter le CTA étiré en tablette tout en conservant l’accessibilité.

Le Hero doit être beaucoup plus immersif, exploiter réellement la référence, utiliser une photographie forte, donner davantage de place au bleu nuit et éviter l’effet générique `texte à gauche + image-card à droite`.

Choisis la meilleure composition selon la référence et les médias réels.

## 9. Médias

Inspecte :

`D:\Projets\Clients\ONE X ENERGY\Media`

Utilise seulement les médias pertinents.

Ne génère pas d’image IA.

Prépare des copies web optimisées sans modifier les originaux.

## 10. Contact

Aucun backend de formulaire n’est défini.

Ne crée pas de formulaire qui prétend envoyer un message.

Utilise :

- `tel:+243850124755`
- `https://wa.me/243850124755`
- `mailto:onexenergyorganization@gmail.com`

## 11. Responsive

Teste réellement : 320, 375, 768, 1024, 1440.

La tablette est un format à part entière, pas un desktop réduit.

## 12. Accessibilité

Conserve et améliore : skip link, landmarks, clavier, aria-current, aria-expanded, aria-controls, Échap, retour du focus, alt, focus visible et contrastes.

## 13. SEO

Implémente `docs/09_SEO_SPEC.md`.

Pas de données structurées inventées.

## 14. Git

Ne demande pas de validation après chaque section, mais conserve des commits cohérents.

Proposition :

1. `refactor: rebuild site shell and visual direction`
2. `feat: build complete homepage`
3. `feat: build services formations and materials pages`
4. `feat: build projects about and contact pages`
5. `chore: finalize seo accessibility and responsive quality`

Adapter si nécessaire.

Avant chaque commit :

```bash
pnpm test
pnpm build
git diff --check
```

## 15. Audit final obligatoire

Avant de considérer la V1 terminée :

- relire les documents ;
- vérifier toutes les routes ;
- tester mobile/tablette/desktop ;
- vérifier les liens ;
- vérifier les images ;
- vérifier les contrastes ;
- rechercher tout chiffre fictif ;
- rechercher tout texte marketing interdit ;
- vérifier qu’aucun faux lien social n’existe ;
- vérifier qu’aucun faux formulaire ne prétend envoyer ;
- vérifier la console ;
- lancer tests, build et `git diff --check`.

## 16. Compte rendu final

Donne :

1. résumé de la nouvelle direction ;
2. fichiers principaux créés/modifiés ;
3. médias utilisés ;
4. pages terminées ;
5. décisions de design importantes ;
6. responsive ;
7. accessibilité ;
8. SEO ;
9. tests ;
10. build ;
11. `git diff --check` ;
12. liste des commits avec hash ;
13. état Git final ;
14. informations client encore manquantes ;
15. éléments volontairement non inventés.

N’attends pas de validation intermédiaire.

Arrête-toi uniquement lorsque la V1 entière est terminée et auditée.
