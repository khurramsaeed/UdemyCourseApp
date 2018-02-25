import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>(); // With @Output we can use this in parent component

  onSelect(arg: string) {
    this.featureSelected.emit(arg);
  }
}
