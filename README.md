# Nodejs TDD Test Starter

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
