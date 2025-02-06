// Importiamo express e utlizziamo la parte di routing
const express = require("express");
const router = express.Router();
// Importo i dati
const dataPosts = require("../data/data_posts");

// Rotte di CRUD dei post

// Index
router.get("/", function (req, res) {
    res.json(dataPosts);
});

// Show
//NON IL MODO CORRETTO
router.get("/:id", function (req, res) {
    res.json(dataPosts[req.params.id - 1]);
});

// Create
router.post("/", function (req, res) {
    res.send("Creazione di un post");
});

// Update
router.put("/:id", function (req, res) {
    res.send("Modifica totale del post " + req.params.id);
});

// Modify
router.patch("/:id", function (req, res) {
    res.send("Modifica parziale del post " + req.params.id);
});

// Delete
router.delete('/:id', function (req, res) {
    res.send("Eliminazione del post " + req.params.id);
});


// Esportiamo il modulo del router
module.exports = router;