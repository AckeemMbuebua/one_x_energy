import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({ selector: 'app-header', imports: [RouterLink, RouterLinkActive], template: `
<header class="site-header"><div class="topline"><div class="shell topline-inner"><a href="tel:+243850124755">+243 85 012 47 55</a><a href="mailto:onexenergyorganization@gmail.com">onexenergyorganization@gmail.com</a></div></div>
<div class="shell nav-row"><a routerLink="/" class="brand" aria-label="ONE X ENERGY — Accueil"><img src="assets/images/logo-dark.png" alt="ONE X ENERGY Organization" width="190" height="72"></a>
<nav class="desktop-nav" aria-label="Navigation principale">@for (item of nav; track item.path) { <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact:item.path === '/'}" #rla="routerLinkActive" [attr.aria-current]="rla.isActive ? 'page' : null">{{ item.label }}</a> }</nav>
<a routerLink="/contact" class="button accent header-cta">Nous contacter</a><button class="menu-button" type="button" [attr.aria-expanded]="open()" aria-controls="mobile-menu" (click)="toggle()"><span class="sr-only">{{ open() ? 'Fermer' : 'Ouvrir' }} le menu</span><span></span><span></span><span></span></button></div>
@if (open()) { <div class="mobile-panel" id="mobile-menu"><nav class="shell mobile-nav" aria-label="Navigation mobile">@for (item of nav; track item.path) { <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact:item.path === '/'}" (click)="close()">{{ item.label }}</a> }<a routerLink="/contact" class="button accent" (click)="close()">Nous contacter</a></nav></div> }</header>` })
export class HeaderComponent {
  private readonly router = inject(Router); readonly open = signal(false);
  readonly nav = [{label:'Accueil',path:'/'},{label:'Services',path:'/services'},{label:'Formations',path:'/formations'},{label:'Matériels',path:'/materiels'},{label:'Réalisations',path:'/realisations'},{label:'À propos',path:'/a-propos'}];
  constructor() { this.router.events.subscribe(() => this.close()); }
  toggle() { this.open.update(value => !value); } close() { this.open.set(false); }
  @HostListener('document:keydown.escape') onEscape() { this.close(); }
}
