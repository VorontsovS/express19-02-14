var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
let obj = {
  title: 'Как дать ребёнку всё без связей и денег', 
  name: 'Дмитрия Карпачёва', 
  tel1: '+38 (044) 35 36 0 36', 
  tel2: '+7 (495) 504 36 06'
};

router.get('/', function(req, res, next) {
  res.render('index', { obj: obj });
});


module.exports = router;
