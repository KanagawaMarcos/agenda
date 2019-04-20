var express = require('express');
var router = express.Router();
var model = require('./../model/contact')();

// CREATE
router.post('/create',(req,res,next)=>{
  let body = req.body;
  model.create(body,(err,contact)=>{
    if(err){
      return err;
    }
    res.redirect('/');
  });
});

// READ
router.get('/', function(req, res, next) {
  model.find(null,(err, contacts)=>{
    if(err){
      throw err;
    }

    res.render('index',{title: 'Agenda', contacts: contacts});
  });
});

// UPDATE
router.post('/update',(req,res,next)=>{
  model.findByIdAndUpdate(req.body.id,{name: req.body.name, phone: req.body.phone, email: req.body.email},(err,contact)=>{
    if(err){
      return err;
    }
    res.redirect('/');
  });
});


// DELETE
router.post('/delete',(req,res)=>{
  model.findByIdAndRemove(req.body.id,(err)=>{
    if(err){
      return err;
    }
    res.redirect('/');
  });
});

module.exports = router;
