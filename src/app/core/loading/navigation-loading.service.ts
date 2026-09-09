import { Injectable, OnDestroy, inject, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationLoadingService implements OnDestroy {
  private readonly subscription: Subscription;
  private timer?: ReturnType<typeof setTimeout>;
  readonly isNavigating = signal(false);
  readonly visible = signal(false);

  constructor() {
    this.subscription = inject(Router).events.subscribe((event) => {
      if (event instanceof NavigationStart) this.start();
      else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      )
        this.finish();
    });
  }

  private start(): void {
    this.clearTimer();
    this.isNavigating.set(true);
    this.timer = setTimeout(() => {
      if (this.isNavigating()) this.visible.set(true);
    }, 120);
  }

  private finish(): void {
    this.clearTimer();
    this.isNavigating.set(false);
    this.visible.set(false);
  }

  private clearTimer(): void {
    if (this.timer) clearTimeout(this.timer);
    this.timer = undefined;
  }

  ngOnDestroy(): void {
    this.clearTimer();
    this.subscription.unsubscribe();
  }
}
