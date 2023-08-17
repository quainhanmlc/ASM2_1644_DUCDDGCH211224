var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  var students = await StudentModel.find();

  res.send(students);
});

module.exports = router;
