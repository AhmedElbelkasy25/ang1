import { Directive, ElementRef, HostListener ,Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Lightbox]',
  standalone: true
})
export class LightboxDirective implements OnChanges {
  @Input("Lightbox") highLightColor:string="yellow";
  @Input("defaultColor") defaultColor:string="darkblue";
  constructor(private eleRef:ElementRef) {
    
    
    
   }
  ngOnChanges(): void {
    this.eleRef.nativeElement.style.border=`solid 2px  ${this.defaultColor}`;
  }
   @HostListener('mouseover')onMouseOver() {
    this.eleRef.nativeElement.style.border = `2px solid ${this.highLightColor}` ; // Corrected style
    this.eleRef.nativeElement.style.backgroundColor='green'
    this.eleRef.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') onMouseOut(){
    this.eleRef.nativeElement.style.border=`solid 2px  ${this.defaultColor}`;
    this.eleRef.nativeElement.style.backgroundColor='';
    this.eleRef.nativeElement.style.cursor = 'pointer';
  }
}
