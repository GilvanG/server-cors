var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
  return res.json([{ message: "Ola! Por favor, insira na url /get/<url> para realizar sua busca. Obs: Substitua cada '/' da url por '..'", By: "GilvanG" }])
});


module.exports = router;