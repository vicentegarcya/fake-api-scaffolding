const { response } = require('express');
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

module.exports.editCourse = (req, res, next) => {
    coursesService.getCourse(req.params.id)
        .then((response) => {
            res.render('editCourse', { course: response.data });
        })
        .catch(err => next(err));
}

module.exports.doEditCourse = (req, res, next) => {
    coursesService.editCourse(req.params.id, req.body)
        .then(() => {
            res.redirect(`/courses/${req.params.id}`)
        })
        .catch(err => next(err));
}

