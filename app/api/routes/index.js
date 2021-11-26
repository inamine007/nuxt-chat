var express = require('express');
var router = express.Router();
const db = require('../models/index');
// var mysql = require('mysql');

// const db = mysql.createConnection({
//   host: '192.168.56.105',
//   user: 'develop',
//   password: 'gvc@2015',
//   database: 'note'
// });

// db.connect((err) => {
//   if (err) {
//     console.log('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('success');
// });

router.get('/', function(req, res, next) {
  res.status(200).send('hoge');
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   db.test.findAll().then(test => {
//     var data = [];
//     for(let i=0; i < test.length; i++) {
//       data.push({
//         name: test[i].dataValues.name,
//       });
//     }
//     res.json({ data });
//   })
// });

// router.post('/', function(req, res, next) {
//   const form = {
//     name: req.body.name
//   }
//   db.sequelize.sync().then(() => {
//     db.test.create(form).then(() => {
//       var data = {
//         success: true
//       }
//       res.json({ data });
//     }).catch(err => {
//       var data = {
//         success: false,
//         err: err
//       }
//       res.json({ data })
//     })
//   })
// })



module.exports = router;