import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrl: './app.component.css'
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  hdlSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
