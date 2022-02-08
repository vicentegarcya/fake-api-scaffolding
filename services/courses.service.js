const httpClient = require('./base.service.js');

const getCourses = () => httpClient.get('/courses');
const getCourse = (courseId) => httpClient.get(`/courses/${courseId}`);

module.exports = {
    getCourses,
    getCourse
}