# Node Benchmark POC

## Get started

- Install dependecies by `npm install`
- Run application by `npm start`.
  - Will run on port 8080 by default, can be changed via PORT env variable.


## Routes

All routes accepts both GET & POST methods, with no change in functionalities.

- `/ping`
  - Ping Pong route

- `/riskengine`
  - Executes 7 function parallel with each 50ms timeout + entry exit functions, each 50 ms.
  - Returns DONE when all executed successfully.
