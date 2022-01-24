var express = require('express');
var router = express.Router();

// Explanation: A nameless path GET request without any parameters.
// We'll learn how to name a path in users route.
router.get('/', function(req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
  return res.json([{ message: "Ola! Por favor, insira na url /get/<url> para realizar sua busca. Obs: Substitua cada '/' da url por '..'", By: "GilvanG" }])
});


module.exports = router;