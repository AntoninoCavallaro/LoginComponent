# LoginComponent

# Componente di Login con Node.js e SQLite

Questo è un componente di login semplice costruito utilizzando HTML, CSS, JavaScript e Node.js. Il componente permette agli utenti di autenticarsi con credenziali memorizzate in un database SQLite.

## Descrizione del Progetto

Questo progetto è un sistema di login che consente agli utenti di accedere con credenziali predefinite memorizzate in un database SQLite. Il form di login è stilizzato con CSS, mentre la logica di autenticazione è gestita tramite Node.js.

Nel database sono presenti i seguenti utenti:

- **utente1** con la password `password123`
- **utente2** con la password `securePass456`
- **utente3** con la password `mySecret789`
- **admin** con la password `admin123`

### Importante
Le password **non sono cifrate**. Si tratta di un esempio di sistema di login senza protezione avanzata. Per un'applicazione di produzione, si raccomanda di cifrare le password prima di memorizzarle nel database.

## Tecnologie Utilizzate

- **HTML** per la struttura della pagina di login
- **CSS** per lo stile del form di login
- **JavaScript** per la logica client-side e la gestione degli eventi
- **Node.js** per il backend e la gestione delle API
- **SQLite** per la memorizzazione delle credenziali degli utenti

## Istruzioni di Installazione

1. Clona questo repository nel tuo ambiente di sviluppo:

   ```bash
   git clone github.com/AntoninoCavallaro/LoginComponent
   cd LoginComponent

2. Installa le dipendenze Node.js su Data:

   ```bash
     npm install

3. Avvia il server:

   ```bash
    node server.js

