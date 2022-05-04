[Online demo](https://mockapi.netlify.app/)

## REQUIRED FEATURES  
  A user should be able to pick any date range, a certain project, or all of them,  a certain gateway or all of them.
  All the information needed for the solution is provided by the Mock API.

## Public API
  ### API base path: ```http://178.63.13.157:8090/mock-api/api/```

  ### GET /users
  Returns all the users in the system

  ### GET /projects
  Returns all the projects in the system

  ### GET /gateways
  Returns all the gateways in the system

  ### POST /report
  Returns all the payments after applying the given filters

  use dates from 01.01.2021 - 31.12.2021 (2021/01/01 - 2021/12/31)

## Setup and Run
1. Run `npm install` to install required dependencies
2. Run `npm start` to run the project and Open http://localhost:8080
3. Run `npm test` to run the testing