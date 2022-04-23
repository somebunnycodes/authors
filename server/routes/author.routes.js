const authorController = require("../controllers/author.controller");

module.exports = (app) => {  
    app.get("/api/authors", authorController.listAuthors);
    app.post("/api/authors", authorController.createAuthor);
    app.get('/api/authors/:id', authorController.getAuthor);
    app.put('/api/authors/:id', authorController.updateAuthor);
    app.delete('/api/authors/:id', authorController.deleteAuthor);
}