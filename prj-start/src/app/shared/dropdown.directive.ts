import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
