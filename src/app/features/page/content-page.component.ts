import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ContactCtaComponent } from '../../shared/components/contact-cta.component';
import { PageKey, pages } from './page-data';

@Component({ selector: 'app-content-page', imports: [RouterLink, ContactCtaComponent], templateUrl: './content-page.component.html' })
export class ContentPageComponent {
  readonly page = pages[inject(ActivatedRoute).snapshot.data['page'] as PageKey];
  readonly services = [
    ['01','Étude','Analyse du besoin électrique avant la réalisation des travaux.'],['02','Conception','Préparation de l’installation en fonction du bâtiment et des besoins identifiés.'],['03','Installation','Réalisation des installations électriques domestiques et commerciales.'],['04','Mise en conformité','Intervention sur des installations existantes nécessitant une remise en conformité.'],['05','Maintenance','Entretien des installations pour assurer leur bon fonctionnement.'],['06','Dépannage','Recherche et traitement de problèmes sur les installations existantes.'],
  ];
  readonly materials = ['Câbles','Interrupteurs','Disjoncteurs','Luminaires','Tableaux électriques','Autres équipements électriques'];
  readonly values = ['Professionnalisme','Intégrité','Sécurité','Formation continue','Satisfaction client'];
  constructor() { inject(Title).setTitle(this.page.title); inject(Meta).updateTag({name:'description',content:this.page.meta}); }
}
