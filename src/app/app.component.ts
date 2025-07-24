import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(overlayContainer: OverlayContainer) {
    // Asegura que no se aplique un tema oscuro por error en overlays como select, datepicker, dialog, etc.
    overlayContainer.getContainerElement().classList.remove('cdk-overlay-dark');
  }
}
