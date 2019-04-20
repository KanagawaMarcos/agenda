var express = require('express');
var router = express.Router();
var model = require('./../model/contact')();


router.get('/', function(req, res, next) {
  model.find(null,(err, contacts)=>{
    if(err){
      throw err;
    }

    res.render('index',{title: 'Agenda', contacts: contacts});
  });
});

router.post('/create',(req,res,next)=>{
  let body = req.body;
  model.create(body,(err,contact)=>{
    if(err){
      return err;
    }
    res.redirect('/');
  });
});

router.post('/delete',(req,res,next)=>{

  model.findByIdAndRemove(req.body.id,(err,contact)=>{
    if(err){
      return err;
    }
    res.redirect('/');
  });
});

module.exports = router;
