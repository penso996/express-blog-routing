// Importiamo Express
const express = require("express");
const app = express();
const port = 3000;

// Definiamo la cartella per i file statici
app.use(express.static("public"));

// Rotta principale (Homepage)
app.get('/', (req, res) => {
    res.send("Homepage");
});

// Importiamo il router dei post
const postsRouter = require("./routers/posts.js");

// Usiamo il router per tutte le rotte che iniziano con "/posts"
app.use("/posts", postsRouter);

// Avvio del server sulla porta specificata
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});