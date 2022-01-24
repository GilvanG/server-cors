var express = require('express');
var router = express.Router();
const axios = require('axios')

var data = ["Insira Url"]
router.get('/', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  return res.json({ message: 'Get Index', data: data });
});

module.exports = router;
router.get('/:url', async (req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*');
	var url = req.params.url.replaceAll('..','/')
  	try {
    	const response = await axios.get(url)//https://www.fruityvice.com/api/fruit/all");
        res.send(response.data);
    }catch (err) {
        next(err)
    }
})