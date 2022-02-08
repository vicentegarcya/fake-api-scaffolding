const httpClient = require('./base.service.js');

const getCourses = () => httpClient.get('/courses');
const getCourse = (courseId) => httpClient.get(`/courses/${courseId}`);
const createCourse = (course) => httpClient.post('/courses', course);

module.exports = {
    getCourses,
    getCourse,
    createCourse
}