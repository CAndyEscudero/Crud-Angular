import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatTableModule,
    BarraNavegacionComponent
  ],
  providers: [provideAnimations()],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'angular-crud';
  nombre = 'Andres';
  city = 'Argentina';

  toggleChanged(event: MatSlideToggleChange) {
    console.log('Toggle está', event.checked ? 'activado' : 'desactivado');

  }
}
