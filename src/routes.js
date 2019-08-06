const { Router } = require('express');


const routes = Router();

routes.get('/', (req, res) => {
  return res.send(`Olá, ${req.query.name || 'Mundo'}`);
});

routes.post('/devs', (req, res) => {
  return res.send(req.body);
});

module.exports = routes;
