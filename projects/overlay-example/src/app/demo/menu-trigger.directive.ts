import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { fromEvent, Observable, race, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { PeriodicElement } from './data-source';

@Directive({
  selector: '[mctMenuTrigger]',
})
export class MenuTriggerDirective implements OnInit, OnDestroy {
  @Input('mctMenuTrigger')
  menu: TemplateRef<{ element: PeriodicElement }>;
  @Input('mctMenuFor')
  element: PeriodicElement;

  constructor(private el: ElementRef,
              private overlay: Overlay,
              private viewContainerRef: ViewContainerRef,
              private overlayPositionBuilder: OverlayPositionBuilder,
              @Inject(DOCUMENT) private document) { }

  private sub: Subscription;
  overlayRef: OverlayRef;

  ngOnInit(): void {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlayPositionBuilder
        .flexibleConnectedTo(this.el)
        .withPositions([{
          originX: 'end',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'top',
        }]),
    });
  }

  @HostListener('click')
  open() {
    if (!this.overlayRef.hasAttached()) {
      const menuPortal = new TemplatePortal(this.menu, this.viewContainerRef, {element: this.element});
      this.overlayRef.attach(menuPortal);

      this.listenForCloseEvents();
    }
  }

  close() {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();

      if (this.sub) {
        this.sub.unsubscribe();
        this.sub = null;
      }
    }
  }

  ngOnDestroy(): void {
    this.close();
    this.overlayRef.dispose();
  }

  private listenForCloseEvents() {
    setTimeout(() => {
      this.sub = race(
        this.menuBtnClicked$(),
        this.outsideClick$(),
      ).subscribe(() => this.close());
    });
  }

  private menuBtnClicked$(): Observable<any> {
    return fromEvent<MouseEvent>(this.overlayRef.overlayElement, 'click')
      .pipe(
        map(event => event.target as HTMLElement),
        filter(clickTarget => this.isButton(clickTarget)),
      );
  }

  private isButton(element: HTMLElement): boolean {
    if (element.tagName.toLowerCase() === 'button') {
      return true;
    }

    return element.parentElement !== null
      ? this.isButton(element.parentElement)
      : false;
  }

  private outsideClick$(): Observable<any> {
    return fromEvent<MouseEvent>(this.document, 'click')
      .pipe(
        map(event => event.target as HTMLElement),
        filter(clickTarget => clickTarget !== this.el.nativeElement),
        filter(clickTarget => !this.overlayRef.overlayElement.contains(clickTarget)),
        take(1),
      );
  }
}
