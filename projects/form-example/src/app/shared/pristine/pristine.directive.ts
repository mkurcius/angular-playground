import { Directive, Input, OnDestroy, OnInit, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[mctPristine]',
})
export class PristineDirective implements OnInit, OnDestroy {
  @Input('mctPristine')
  value: any;

  constructor(@Self() private ngControl: NgControl) { }

  private sub: Subscription;

  ngOnInit(): void {
    this.sub = this.ngControl.valueChanges
      .pipe(
        map(value => value !== '' ? value : null),
      )
      .subscribe(value => {
        if (value !== this.value) {
          this.ngControl.control.markAsDirty();
        } else {
          this.ngControl.control.markAsPristine();
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
