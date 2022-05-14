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
  try {
	res.set('Access-Control-Allow-Origin', '*');
	var url = req.params.url;
	console.log(url)
	url = url.split('..').join('/');
	console.log(url)
	const response = await axios.get(url);
        res.send(response.data);
    }catch (err) {
        next(err)
    }
})
