const coursesService = require('../services/courses.service.js');

module.exports.list = (req, res, next) => {
    coursesService.getCourses()
        .then(() => {
            res.render('courses');
        })
        .catch(err => next(err))
}