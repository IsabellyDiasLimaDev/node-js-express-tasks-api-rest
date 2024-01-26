# Tasks Api

> Project based on the problem presented by you.com

## Table of content
- [Tasks Api](#tasks-api)

  - [Installation](#installation)
  - [Endpoints Manual](#endpoints-manual)
  - [Tasks endpoint](#tasks-endpoint)
  - [Project Structure](#project-structure)
  - [Data Schemas](#data-schemas)
    - [User Schema](#user-schema)
    - [Tasks Schema](#tasks-schema)


## Installation

Before start the project locally you must have [docker](https://www.docker.com/),  [docker compose](https://docs.docker.com/compose/) and  [Node.js](https://nodejs.org/en/download) installed on your machine.

First go to the project's ./docker/mariadb folder and run the following command in the terminal:

``` shell
docker-compose up -d
```

this docker-compose is responsible for starting the database

After that, go to the root of the project where package.json is and run the following command to install the dependencies:

``` shell
npm install
```
Following these steps, just run the project start command
```
npm run dev
```

## Endpoints Manual

### Users endpoint

| Method | Route            | Functionality                   | Body Data                           | Query Params | Auth Required | Content Return   |
| ------ | ---------------- | ------------------------------- | ----------------------------------- | ------------ | ------------- | ---------------- |
| POST   | /users           | create a new user               | { email: string, password: string } | empty        | false         | empty            |
| GET    | /users           | show all users                | empty                               | page: number | false         | User Schema List |
| GET    | /users/:id       | show users                     | empty                               | empty        | false         | User Schema      |
| GET    | users?search=    | show users with criteria       | empty                               | empty        | false         | User Schema List |
| PUT    | /users/:id       | edit users                     | { email: string, password: string } | empty        | false         | empty            |
| DELETE | /users/:id       | delete users                   | empty                               | empty        | false         | empty            |

### Tasks endpoint

| Method | Route            | Functionality                   | Body Data                           | Query Params | Auth Required | Content Return   |
| ------ | ---------------- | ------------------------------- | ----------------------------------- | ------------ | ------------- | ---------------- |
| POST   | /videos           | create a new video description | { email: string, password: string } | empty        | false         | empty            |
| GET    | /videos           | show all videos                | empty                               | page: number | false         | User Schema List |
| GET    | /videos/:id       | show video                     | empty                               | empty        | false         | User Schema      |
| GET    | videos?search=    | show video with criteria       | empty                               | empty        | false         | User Schema List |
| PUT    | /videos/:id       | edit video                     | { email: string, password: string } | empty        | false         | empty            |
| DELETE | /videos/:id       | delete video                   | empty                               | empty        | false         | empty            |


## Project Structure

This API was written in [typescript](https://www.typescriptlang.org/) together with the [express](https://expressjs.com/pt-br/) framework for http operations and [mariadb](https://mariadb.org/) database.

Below is the current project directory structure:

```
├── docker
    ├── mariadb
        ├── docker-compose.yml
        ├── init.sql
├── src
    ├── application
        ├── controllers
            ├── TaskController.ts
            ├── UserController.ts
        ├── routes
            ├── TaskRoutes.ts
            ├── UserRoutes.ts
        ├── services
            ├── TaskService.ts
            ├── UserService.ts
    ├── core
        ├── config
            ├── typeOrmConfig.ts
        ├── server.ts
    ├── data
        ├── dtos
            ├── mappers
                ├── TaskMapper.ts
                ├── UserMapper.ts
            ├── TaskDTO.ts
            ├── UserDTO.ts
        ├── models
            ├── Task.ts
            ├── User.ts
        ├── repositories
            ├── TaskRepository.ts
            ├── UserRepository.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.MD
├── routes.http
├── tsconfig.json
├── yarn.lock
```

## Data Schemas

The project have the current data schemas:

- ### User Schema

```
{
  id: string;
  name: string;
  email: string;
  password: string;
}
```

- ### Tasks Schema

```
{
  id: string;
  title: string;
  description: string;
  deadline: string;
  userId: string;
}
```