'use strict'

const app = require('../../app')
const chai = require('chai')
const request = require('supertest')

const expect = chai.expect

describe('Formula 1 API Integration Tests', () => {
    describe('#GET / teams', () => {
        it('should get all teams', () => {
            request(app).get('/api/teams')
                .end((error, res) => {
                    expect(res.statusCode).to.equal(200)
                })
        })
    })
})