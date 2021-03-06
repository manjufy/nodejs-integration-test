# Nodejs TDD Test Starter

# Why Testing is Important

- Brings Quality
- Assurance
- Enables continuous delivery

## Types of tests

- Unit: Test specific aspect of your code
- Integration: Test components to work as they should
- Functional: Test final product

Lets consider the following API example to do integration and unit tests.

## Test-Driven-Development (TDD)

Developing software while basing on tests. Development is based on tests.

## Behaviour-Driven-Design (BDD)

Which in fact is based on TDD, but test driven by behaviour, specification, they are just better described.

## API Structure

```
npm run start
http://localhost:3000/api
http://localhost:3000/api/teams
http://localhost:3000/api/drivers
http://localhost:3000/api/races
```

### Run Integration Tests

`npm run test:integration`


### Run Unit Tests

`npm run test:unit`


Don't forget to install mocha globally

```
npm install -g mocha  // install mocha globally
npm test
```

```
By default, Mocha looks for the glob ./test/*.js. - http://mochajs.org/#the-test-directory
```

### References

https://blog.codeship.com/testing-http-apis-supertest/

https://dev.to/areknawo/introduction-to-unit-testing-in-js-2bmk