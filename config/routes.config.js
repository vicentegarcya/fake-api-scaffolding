const express = require('express');
const router = express.Router();
const courses = require('../controllers/courses.controller.js')

router.get('/', (req, res, next) => {
  res.render('index')
})

// Courses routes
router.get('/courses', courses.list);
router.get('/courses/new', courses.createCourse);
router.get('/courses/:id', courses.listOneCourse);
router.post('/courses', courses.doCreateCourse);

module.exports = router;