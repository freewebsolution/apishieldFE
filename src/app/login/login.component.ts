import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms'; // Aggiungi FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule], // Aggiungi FormsModule nella lista di imports
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  codiceFiscale: string = ''; // Variabile per memorizzare il codice fiscale

  constructor() {}

  // Metodo per inviare il codice fiscale al backend
  onSubmit() {
    this.authService.login(this.codiceFiscale);
  }
}
