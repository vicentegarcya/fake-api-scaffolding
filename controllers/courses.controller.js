const coursesService = require('../services/courses.service.js');

module.exports.list = (req, res, next) => {
    coursesService.getCourses()
        .then((response) => {
            res.render('courses', { courses: response.data });
        })
        .catch(err => next(err))
}

module.exports.listOneCourse = (req, res, next) => {
    coursesService.getCourse(req.params.id)
        .then((response) => {
            console.log(response.data)
            res.render('detailCourse', { course: response.data });
        })
        .catch(err => next(err));
}