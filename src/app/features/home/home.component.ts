import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ContactCtaComponent } from '../../shared/components/contact-cta.component';

@Component({ selector: 'app-home', imports: [RouterLink, ContactCtaComponent], templateUrl: './home.component.html' })
export class HomeComponent {
  constructor() {
    inject(Title).setTitle('ONE X ENERGY | Électricité bâtiment, formation et matériels');
    inject(Meta).updateTag({ name: 'description', content: 'ONE X ENERGY intervient dans l’électrification des bâtiments, la formation en électricité bâtiment et la fourniture de matériels électriques.' });
  }
}
