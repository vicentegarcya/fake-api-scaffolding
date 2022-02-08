const express = require('express');
const router = express.Router();
const courses = require('../controllers/courses.controller.js')

router.get('/', (req, res, next) => {
  res.render('index')
})

// Courses routes
router.get('/courses', courses.list);

module.exports = router;