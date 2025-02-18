const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express(); // Definisci l'app prima di usarla
app.use(cors()); // Abilita CORS per tutte le richieste

app.use(express.json());
app.use(express.static('public'));

const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Errore di connessione a SQLite:', err);
    } else {
        console.log('Connesso a SQLite');
    }
});

// API di login
app.post('/api/login', (req, res) => {
    try {
        const { username, password } = req.body;

        // Esegui la query per trovare l'utente
        db.all('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
            if (err) {
                console.error('Errore durante la query:', err);
                return res.status(500).json({ success: false, message: 'Errore interno del server' });
            }

            console.log('Dati recuperati:', results);  // Aggiungi questo log

            if (results.length === 0) {
                return res.status(404).json({ success: false, message: 'Utente non trovato' });
            }

            const user = results[0]; // Usa il primo risultato della query

            // Confronta la password in chiaro
            if (password === user.password) {
                return res.json({ success: true, message: 'Login avvenuto con successo' });
            } else {
                return res.status(401).json({ success: false, message: 'Password errata' });
            }
        });

    } catch (error) {
        console.error('Errore durante il login:', error);
        return res.status(500).json({ success: false, message: 'Errore interno del server' });
    }
});

// Avvio del server
app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});
