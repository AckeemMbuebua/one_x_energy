import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ContactCtaComponent } from '../../shared/components/contact-cta.component';
import { ImageLoadingDirective } from '../../shared/directives/image-loading.directive';

@Component({ selector: 'app-home', imports: [RouterLink, ContactCtaComponent, ImageLoadingDirective], templateUrl: './home.component.html' })
export class HomeComponent {
  constructor() {
    inject(Title).setTitle('ONE X ENERGY | Électricité bâtiment, formation et matériels');
    const meta = inject(Meta);
    const description = 'ONE X ENERGY intervient dans l’électrification des bâtiments, la formation en électricité bâtiment et la fourniture de matériels électriques.';
    meta.updateTag({ name: 'description', content: description });
    meta.updateTag({ property: 'og:title', content: 'ONE X ENERGY | Électricité bâtiment, formation et matériels' });
    meta.updateTag({ property: 'og:description', content: description });
  }
}
