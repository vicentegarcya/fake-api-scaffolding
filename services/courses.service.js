const httpClient = require('./base.service.js');

const getCourses = () => httpClient.get('/courses');

module.exports = {
    getCourses
}