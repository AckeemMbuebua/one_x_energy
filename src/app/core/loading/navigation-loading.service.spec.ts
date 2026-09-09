import { TestBed } from '@angular/core/testing';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subject } from 'rxjs';
import { vi } from 'vitest';
import { NavigationLoadingService } from './navigation-loading.service';

describe('NavigationLoadingService', () => {
  let events: Subject<unknown>;
  let service: NavigationLoadingService;

  beforeEach(() => {
    vi.useFakeTimers();
    events = new Subject<unknown>();
    TestBed.configureTestingModule({ providers: [{ provide: Router, useValue: { events } }] });
    service = TestBed.inject(NavigationLoadingService);
  });

  afterEach(() => vi.useRealTimers());

  it('activates on NavigationStart and only becomes visible after the delay', () => {
    events.next(new NavigationStart(1, '/services'));
    expect(service.isNavigating()).toBe(true);
    expect(service.visible()).toBe(false);
    vi.advanceTimersByTime(120);
    expect(service.visible()).toBe(true);
  });

  it.each([
    new NavigationEnd(1, '/services', '/services'),
    new NavigationCancel(1, '/services', 'cancelled'),
    new NavigationError(1, '/services', new Error('failed')),
  ])(
    'clears the loader when navigation finishes',
    (event: NavigationEnd | NavigationCancel | NavigationError) => {
      events.next(new NavigationStart(1, '/services'));
      vi.advanceTimersByTime(120);
      events.next(event);
      expect(service.isNavigating()).toBe(false);
      expect(service.visible()).toBe(false);
    },
  );

  it('never leaves a loader visible after a fast navigation', () => {
    events.next(new NavigationStart(1, '/formations'));
    vi.advanceTimersByTime(50);
    events.next(new NavigationEnd(1, '/formations', '/formations'));
    vi.advanceTimersByTime(120);
    expect(service.visible()).toBe(false);
  });
});
