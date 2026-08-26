import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { ContentPageComponent } from './content-page.component';
import { PageKey } from './page-data';
import { HomeComponent } from '../home/home.component';

const forbiddenNotes = [
  'URL exactes',
  'n’ayant pas été communiquées',
  'Images communiquées',
  'volontairement factuelles',
  'sans information validée',
  'sont à confirmer',
  'Cette page rassemble',
  'disposant déjà de bases',
  'Comprendre le besoin',
  'Étudier',
  'Intervenir',
  'Vérifier',
];

async function renderPage(page: PageKey): Promise<string> {
  TestBed.resetTestingModule();
  await TestBed.configureTestingModule({
    imports: [ContentPageComponent],
    providers: [
      provideRouter([]),
      { provide: ActivatedRoute, useValue: { snapshot: { data: { page } } } },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(ContentPageComponent);
  fixture.detectChanges();
  await fixture.whenStable();
  return (fixture.nativeElement as HTMLElement).textContent ?? '';
}

describe('public editorial content', () => {
  it.each<PageKey>(['services', 'formations', 'materiels', 'realisations', 'contact'])(
    'does not expose internal notes on %s',
    async (page) => {
      const content = await renderPage(page);
      for (const note of forbiddenNotes) {
        expect(content).not.toContain(note);
      }
    },
  );

  it('keeps the official values without added descriptions', async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const content = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(content).toContain('Professionnalisme');
    expect(content).toContain('Satisfaction client');
    expect(content).not.toContain('Travailler avec méthode');
    expect(content).not.toContain('Communiquer de manière transparente');
  });
});
