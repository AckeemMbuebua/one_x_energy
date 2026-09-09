import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
} from '@angular/core';

@Directive({ selector: 'img[appImageLoading]' })
export class ImageLoadingDirective implements AfterViewInit {
  private readonly image = inject<ElementRef<HTMLImageElement>>(ElementRef).nativeElement;
  @HostBinding('class.image-loaded') loaded = false;

  ngAfterViewInit(): void {
    if (this.image.complete) this.loaded = true;
  }

  @HostListener('load') onLoad(): void {
    this.loaded = true;
  }
}
