## Angular Unit Testing

- Create Unit Test that are less brittle
- Faster tests and less Memory intensive
  - calls to fixture.createComponent() are expensive
  - beforeEach with fixture.createComponent() that runs before each test
  - above are expensive calls
- Avoid Unnecessary HTML Dom Testing unless there is logic to dynamic create html elements

- Lack of third Party Support
