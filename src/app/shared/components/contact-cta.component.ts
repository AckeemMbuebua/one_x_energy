import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ selector: 'app-contact-cta', imports: [RouterLink], template: `<section class="contact-cta"><div class="shell contact-cta-grid"><div><p class="eyebrow light">Contact direct</p><h2>{{ title() }}</h2><p>{{ text() }}</p></div><div class="button-row"><a class="button accent" href="https://wa.me/243850124755">Écrire sur WhatsApp</a><a class="button outline-light" routerLink="/contact">Nous contacter</a></div></div></section>` })
export class ContactCtaComponent { title = input('Un besoin en électricité, formation ou matériel ?'); text = input('Contactez ONE X ENERGY pour échanger sur votre demande.'); }
