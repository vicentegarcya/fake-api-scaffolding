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
            res.render('detailCourse', { course: response.data });
        })
        .catch(err => next(err));
}

module.exports.createCourse = (req, res, next) => {
    res.render('newCourse');
}

module.exports.doCreateCourse = (req, res, next) => {
    coursesService.createCourse(req.body)
        .then((response) => {
            res.redirect(`/courses/${response.data.id}`);
        })
        .catch(err => next(err));
}

