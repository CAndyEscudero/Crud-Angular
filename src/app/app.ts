import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-crud';
  nombre = 'Andres';
  city = 'Argentina';
}

export class Users {
  username = 'Andres';
}
