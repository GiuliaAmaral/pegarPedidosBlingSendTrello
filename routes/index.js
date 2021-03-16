var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    name: "pegarpedidosblingsendtrello",
    description: "API da e-Casamenteira que pega os pedidos do bling e envia para o automate.io enviar pro Trello."
  })
});

module.exports = router;
