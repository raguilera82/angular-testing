## In this example you can view better way, the solution has three layers: proxy (connect to remote server), adapter (match response with domain model) and view (of course Component). This is easy for testing because much logic is in the domain.

### To start fake server you have to execute. Listen in port 3000

```
$> npm run fake-server
```

### To run unit and integration tests with code coverage

```
$> npm run test -- --code-coverage
```

### To run e2e tests

```
$> npm run e2e
```