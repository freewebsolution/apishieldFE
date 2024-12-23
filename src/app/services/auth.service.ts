import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Assicurati di importare Observable

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient); // Usa `inject` per l'iniezione del servizio HttpClient
  private router = inject(Router);

  // Variabili per memorizzare il profilo utente e il token
  profile = signal<any>(null);
  token = signal<string | null>(null);

  constructor() {} // Rimuovi `private http: HttpClient` dal costruttore

  // Metodo per il login con il codice fiscale
  loginWithCodiceFiscale(codiceFiscale: string): Observable<any> {
    const apiUrl = 'http://localhost:8000/api/v1/login'; // Definisci direttamente l'URL dell'API

    // Invia la richiesta POST al backend con il codice fiscale nel body
    return this.http.post<any>(apiUrl, { codice_fiscale: codiceFiscale });
  }

  // Funzione di login
  login(codiceFiscale: string) {
    // Usa il metodo di login con codice fiscale
    this.loginWithCodiceFiscale(codiceFiscale).subscribe({
      next: (response) => {
        // Se la risposta è corretta, salviamo il token e il profilo
        this.token.set(response.token);
        this.profile.set(response.user);
        localStorage.setItem('token', response.token); 
        localStorage.setItem('name', response.user.name); 
        localStorage.setItem('fiscal_code', response.user.codice_fiscale); 
        localStorage.setItem('email', response.user.email);  // Memorizza il token nel localStorage
        this.router.navigate(['/dashboard']);  // Reindirizza alla dashboard
      },
      error: (err) => {
        console.error('Errore nel login', err);
        // Gestisci gli errori di login qui (ad esempio, mostra un messaggio all'utente)
      },
    });
  }

  // Funzione di logout
  logout() {
    this.token.set(null);
    this.profile.set(null);
    localStorage.removeItem('token');  // Rimuovi il token dal localStorage
    this.router.navigate(['/login']);  // Reindirizza alla pagina di login
  }

  // Funzione per ottenere il profilo
  getProfile() {
    return this.profile();
  }

  // Funzione per ottenere il token
  getToken() {
    return this.token();
  }
}
