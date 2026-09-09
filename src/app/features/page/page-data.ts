export type PageKey =
  'services' | 'formations' | 'materiels' | 'realisations' | 'about' | 'contact' | 'notFound';
export interface PageData {
  title: string;
  meta: string;
  eyebrow: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  type: PageKey;
}
export const pages: Record<PageKey, PageData> = {
  services: {
    type: 'services',
    title: 'Services électriques | ONE X ENERGY',
    meta: 'Découvrez les services ONE X ENERGY : étude, conception, installation, mise en conformité, maintenance et dépannage électriques.',
    eyebrow: 'Électrification des bâtiments',
    heading: 'Des installations électriques étudiées, réalisées et entretenues.',
    intro:
      'ONE X ENERGY intervient sur les installations électriques domestiques et commerciales : étude, conception, réalisation, mise en conformité, maintenance et dépannage.',
    image: 'assets/images/work-detail.webp',
    imageAlt: 'Réseau de gaines électriques intégré à une dalle',
  },
  formations: {
    type: 'formations',
    title: 'Formation en électricité bâtiment | ONE X ENERGY',
    meta: 'ONE X ENERGY propose des formations techniques de base et avancées en électricité bâtiment pour jeunes, étudiants, techniciens et professionnels.',
    eyebrow: 'Formation en électricité bâtiment',
    heading: 'Développer des compétences techniques en électricité bâtiment.',
    intro:
      'ONE X ENERGY propose des formations techniques de base et avancées à différents profils souhaitant apprendre ou approfondir l’électricité bâtiment.',
    image: 'assets/images/switch-wiring.webp',
    imageAlt: 'Conducteurs raccordés à un mécanisme électrique',
  },
  materiels: {
    type: 'materiels',
    title: 'Matériels électriques | ONE X ENERGY',
    meta: 'ONE X ENERGY distribue des câbles, interrupteurs, disjoncteurs, luminaires, tableaux et autres matériels électriques.',
    eyebrow: 'Matériels électriques',
    heading: 'Les équipements essentiels pour vos installations.',
    intro:
      'ONE X ENERGY distribue différents matériels et équipements utilisés dans les installations électriques.',
    image: 'assets/images/switch-wiring.webp',
    imageAlt: 'Mécanisme d’interrupteur et conducteurs électriques',
  },
  realisations: {
    type: 'realisations',
    title: 'Réalisations | ONE X ENERGY',
    meta: 'Découvrez les réalisations et interventions présentées par ONE X ENERGY.',
    eyebrow: 'Réalisations',
    heading: 'Le travail se montre sur le terrain.',
    intro:
      'Découvrez une sélection d’installations électriques et d’interventions réalisées sur le terrain.',
    image: 'assets/images/maison.jpeg',
    imageAlt: 'Réseau électrique préparé dans une dalle de bâtiment',
  },
  about: {
    type: 'about',
    title: 'À propos | ONE X ENERGY',
    meta: 'Découvrez ONE X ENERGY Organization et ses trois domaines : électrification, formation et matériels électriques.',
    eyebrow: 'ONE X ENERGY Organization',
    heading: 'Une organisation structurée autour de l’électricité.',
    intro:
      'ONE X ENERGY développe ses activités autour de trois axes complémentaires : l’électrification des bâtiments, la formation en électricité bâtiment et la fourniture de matériels électriques.',
    image: 'assets/images/interior-lighting.webp',
    imageAlt: 'Intérieur de bâtiment avec installations d’éclairage',
  },
  contact: {
    type: 'contact',
    title: 'Contact | ONE X ENERGY',
    meta: 'Contactez ONE X ENERGY pour une installation électrique, une formation ou une demande de matériel.',
    eyebrow: 'Contact',
    heading: 'Parlons de votre besoin.',
    intro:
      'Pour une installation, une formation ou une demande de matériel, contactez directement ONE X ENERGY.',
    image: 'assets/images/finished-installation.webp',
    imageAlt: 'Éclairage installé dans un intérieur',
  },
  notFound: {
    type: 'notFound',
    title: 'Page introuvable | ONE X ENERGY',
    meta: 'La page demandée n’est pas disponible.',
    eyebrow: 'Erreur 404',
    heading: 'Page introuvable',
    intro: 'La page demandée n’est pas disponible.',
    image: 'assets/images/switch-wiring.webp',
    imageAlt: 'Mécanisme électrique en cours de raccordement',
  },
};
