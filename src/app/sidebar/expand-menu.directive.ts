import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appExpandMenu]'
})
export class ExpandMenuDirective {

  constructor() { }
  @HostBinding('class.active') isOpen = false;
  @HostListener('click') toggleOpen($event){
  this.isOpen = !this.isOpen;
  }

}
