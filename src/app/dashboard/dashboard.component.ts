import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);
  profile: any = null; // Variabile per il profilo utente

  ngOnInit() {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const fiscal_code = localStorage.getItem('fiscal_code');
    const email = localStorage.getItem('email');

    if (!token) {
      // Se non c'è un token, reindirizziamo al login
      this.router.navigate(['/login']);
    } else {
      // Popoliamo il profilo utente dai dati salvati
      this.profile = {
        name: name || 'Nome non disponibile',
        codice_fiscale: fiscal_code || 'Codice fiscale non disponibile',
        email: email || 'Email non disponibile',
      };
    }
  }

  logOut() {
    localStorage.clear(); // Rimuove tutti i dati dal localStorage
    this.router.navigate(['/login']); // Reindirizza al login
  }
}
