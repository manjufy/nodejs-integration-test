'use strict'

const app = require('../../app')
const chai = require('chai')
const request = require('supertest')

const expect = chai.expect

describe('Add 1 + 1 to equal 2', () => {
    describe('#Add / 1 + 1 = 2', () => {
        it('should expect 2', () => {
            expect(1+1).equal(2)
        })
    })
})