import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { ContentPageComponent } from './content-page.component';
import { PageKey } from './page-data';

const forbiddenNotes = [
  'URL exactes',
  'n’ayant pas été communiquées',
  'Images communiquées',
  'volontairement factuelles',
  'sans information validée',
  'sont à confirmer',
  'Cette page rassemble',
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
  it.each<PageKey>(['materiels', 'realisations', 'contact'])(
    'does not expose internal notes on %s',
    async (page) => {
      const content = await renderPage(page);
      for (const note of forbiddenNotes) {
        expect(content).not.toContain(note);
      }
    },
  );
});
