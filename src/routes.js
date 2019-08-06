const { Router } = require('express');


const routes = Router();

routes.get('/', (req, res) => {
  return res.send(`Olá, ${req.query.name || 'Mundo'}`);
});

module.exports = routes;
