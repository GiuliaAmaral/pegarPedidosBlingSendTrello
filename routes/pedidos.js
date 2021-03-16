const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/pegarBlingEnviarTrello', function (req, res, next) {

  let urlBling = "https://bling.com.br/Api/v2/pedidos/json/";
  urlBling = + "?apikey=406280825aef0879a3b7cd1640912e49eef600037da87804bdaba94d6ccff6e0f2d626ff";
  urlBling = + "&filters=idSituacao[6]";
  axios.get(urlBling).then(respostaBling => {
    let pedidos = respostaBling.data.retorno.pedidos;

    pedidos.forEach(pedido => {
      pedido = pedido.pedido;
      axios.post("https://wh.automate.io/webhook/6050a2655aae5b048ebb4905", pedido);
    });

    res.json({
      status: "OK",
      resposta: "Todos pedidos em aberto no Bling enviados ao automate.io"
    });
  }).catch(erro => {
    res.json({
      status: "ERRO",
      resposta: erro
    });
  });
});

module.exports = router;
