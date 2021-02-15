var express = require('express');
var router = express.Router();

var TestScript = require('../public/javascripts/DatabaseConnect.js');


router.post('/', function(res){
    return;
})

router.post('/removeDB', TestScript.deleteComment);
router.post('/testRoute', TestScript.saveComment);
router.get('/getDB', TestScript.getComments);

module.exports = router;