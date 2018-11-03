const assert = require('assert');
const request = require('supertest');
const app = require('../index.js');


describe('PUT /ordena', function() {
    it('should create', function (done) {
	request(app)
	    .put('/ordena/9/5/8')
	    .expect('Content-Type', /json/)
	    .expect(200,done);
    });
});


describe('GET /', function() {
    it('should return JSON'), function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);
    }
});

