// Chiamo la funzione in una variabile
const express = require("express");
// creo qualcosa per poter usare qualcosa
const path = require('path');
// Dentro questa variabile viene memorizzata l'istanza dell'applicazione express (web o server express), per ora mi serve solo per definire le rotte
const app = express();
// Scelto il portale in cui avviare il server
const port = 3000;
// importo roba dall'altro file
const posts = require('./post-list');
// Creo una rotta base
app.get('/', (req, resp) => {
    // Come risposta torna la stringa del comando
    resp.send("Server del mio blog")
})

// Creo una rotta per bacheca
// Rotta /bacheca
app.get('/bacheca', (req, res) => {
    res.json({
      count: posts.length,
      posts,
    });
  });

// Faccio qualcosa con gli assets statici
app.use(express.static("public"));

// Avvio il server
app.listen(port, () => {
});
