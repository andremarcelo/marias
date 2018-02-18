import {Directive, ElementRef, HostListener, Input} from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appSizeChange]'
})
export class SizeChangeDirective {

  @Input() size: string;

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.changeSize('+');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeSize('-');
  }

  private changeSize(add: string) {
    const changeSize = this.size || '150px';

    $(this.elRef.nativeElement).animate({
      width: add + '=' + changeSize
    });
  }
}
