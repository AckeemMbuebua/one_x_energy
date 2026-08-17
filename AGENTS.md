# AGENTS.md — ONE X ENERGY

## 1. Rôle de Codex

Tu interviens sur le site vitrine officiel de **ONE X ENERGY Organization**.

Ta mission est de produire une V1 complète, cohérente, professionnelle et maintenable à partir :

1. des documents présents dans `docs/` ;
2. des médias réels disponibles dans le projet et dans le dossier média fourni ;
3. de la référence visuelle fournie automatiquement avec la tâche ;
4. du code Angular existant, uniquement lorsqu’il reste utile techniquement.

Tu ne dois pas demander une validation après chaque section. Tu peux réaliser la V1 complète de bout en bout, en conservant des commits Git cohérents par lots fonctionnels.

## 2. Priorités

En cas de conflit, respecter cet ordre :

1. informations factuelles validées sur ONE X ENERGY ;
2. règles éditoriales ;
3. identité visuelle de ONE X ENERGY ;
4. accessibilité et utilisabilité ;
5. référence visuelle ;
6. préférences décoratives.

La référence visuelle inspire la composition. Elle ne remplace jamais la marque, les contenus ou l’identité de ONE X ENERGY.

## 3. Interdiction d’inventer

Ne jamais inventer :

- année de création ;
- adresse ;
- ville ou zone d’intervention ;
- horaires ;
- statistiques ;
- nombre de clients ;
- nombre de projets ;
- nombre d’apprenants ;
- témoignages ;
- avis ;
- partenaires ;
- marques distribuées ;
- certifications ;
- prix ;
- garanties ;
- délais d’intervention ;
- noms de membres d’équipe ;
- programmes détaillés de formation non fournis ;
- dates de formation ;
- disponibilité de produits ;
- réalisations fictives.

Lorsqu’une information manque, utiliser uniquement une structure qui peut rester vide ou une formulation générique factuelle. Ne pas produire de faux contenu de remplissage présenté comme réel.

## 4. Ligne éditoriale

Langue principale : **français**.

Le ton doit être :

- direct ;
- professionnel ;
- humain ;
- technique sans jargon inutile ;
- précis ;
- sobre ;
- crédible.

Éviter le style publicitaire générique ou typique de textes générés par IA.

Éviter notamment :

- « révolutionner »
- « repousser les limites »
- « façonner l’avenir »
- « propulser »
- « innovation au cœur de notre ADN »
- « solution 360° »
- « expérience exceptionnelle »
- « excellence inégalée »
- « partenaire de confiance »
- « leader »
- « meilleur »
- « transformer votre vision en réalité »
- « l’énergie de demain »
- « construisons l’avenir ensemble »

Ne pas utiliser une phrase simplement parce qu’elle “sonne marketing”.

## 5. Direction UX/UI

Le rendu final doit être :

- professionnel ;
- technique ;
- contemporain ;
- institutionnel ;
- énergique mais sobre ;
- fortement photographique ;
- adapté à une entreprise réelle d’électricité.

Le site ne doit pas ressembler :

- à une landing page SaaS ;
- à une démo de composants ;
- à un template industriel copié ;
- à un site généré automatiquement par IA.

Éviter :

- glassmorphism ;
- blobs ;
- halos ;
- glow ;
- gradients décoratifs systématiques ;
- bento grids ;
- cartes partout ;
- coins excessivement arrondis ;
- icônes décoratives à répétition ;
- gros titres purement spectaculaires ;
- chiffres fictifs ;
- illustrations de grues, engrenages ou silhouettes de chantier génériques ;
- effets 3D gratuits ;
- animations permanentes.

## 6. Référence visuelle fournie

Une référence visuelle sera fournie automatiquement avec la tâche.

Avant de modifier l’interface :

1. l’inspecter ;
2. identifier sa hiérarchie, son rythme, son traitement photographique et ses proportions ;
3. reprendre ses principes utiles ;
4. supprimer tout élément trop spécifique à la construction lourde ou à une autre marque ;
5. adapter le résultat aux couleurs, typographies, contenus et métiers de ONE X ENERGY.

Ne pas copier :

- le logo ;
- les textes ;
- les statistiques ;
- les silhouettes ;
- les grues ;
- les engrenages ;
- les motifs propriétaires ;
- les compositions reconnaissables à l’identique.

## 7. Identité officielle

### Couleurs

- Bleu nuit : `#04002D`
- Orange : `#FF4D00`
- Blanc contextuel : `#FFFFFF`

Les autres neutres et tokens sont définis dans `docs/04_DESIGN_SYSTEM.md`.

### Typographies

- **Montserrat** : display, H1, H2, H3.
- **Manrope** : paragraphes, navigation, boutons, formulaires, labels, légendes et interface.

Les fontes doivent rester auto-hébergées en WOFF2.

## 8. Architecture technique

Stack :

- Angular 22 ;
- TypeScript strict ;
- standalone components ;
- Angular Router ;
- Tailwind CSS 4 ;
- Vitest ;
- pnpm 10.33.0.

Architecture cible simple :

- `core/`
- `shared/`
- `features/`

Ne pas ajouter :

- NgRx ;
- Angular Material ;
- PrimeNG ;
- Bootstrap ;
- DaisyUI ;
- Flowbite ;
- CMS ;
- backend ;
- authentification ;
- panier ;
- paiement ;
- dashboard ;
- dépendance d’animation lourde.

## 9. Git

Le projet suit une règle simple : **un lot cohérent + tests verts = un commit clair**.

Même si la V1 est réalisée sans validation section par section, ne pas accumuler tout le site dans un seul commit.

Avant chaque commit :

- `pnpm test`
- `pnpm build`
- `git diff --check`

À la fin, l’arbre Git doit être propre.

## 10. Définition de « terminé »

Une V1 n’est terminée que lorsque :

- les sept pages sont accessibles ;
- la navigation fonctionne ;
- le responsive est contrôlé ;
- les médias sont optimisés ;
- le contenu respecte les sources ;
- aucun contenu fictif n’est présenté comme réel ;
- le site est accessible au clavier ;
- les contrastes sont corrects ;
- les tests passent ;
- le build passe ;
- aucune erreur console n’est présente ;
- les métadonnées SEO essentielles sont en place ;
- le code est prêt pour un déploiement Vercel.
