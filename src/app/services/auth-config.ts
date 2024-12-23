import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: '',  // Non serve l'issuer con il tuo backend, lo lasciamo vuoto
  redirectUri: window.location.origin,
  clientId: '',  // Non abbiamo bisogno di un client ID per il tuo login custom
  scope: 'openid profile email',  // Puoi lasciare anche questi scope se li desideri
  strictDiscoveryDocumentValidation: false,  // Puoi lasciarlo false se non hai un documento di discovery
};
