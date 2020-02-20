# heticmadu_api

This repository contains the API for the project heticmadu.

The production API is available here: http://52.47.64.108:4000/ 

The database system is not accessible from outside the server.

The API documentation will be available here: http://52.47.64.108:4000/api (WIP)

## Contributors

- Pierre Turnbull
- Billal Ouaali

## Stack

- API framework: [NestJS](https://nestjs.com/) enables building a strong, complex API using TypeScript and that supports various tools such as ORM frameworks, authentication middlewares or documentation frameworks.
- ORM: [TypeORM](https://typeorm.io/#/) is well supported by NestJS and very popular.
- Database system: [MySQL](https://www.mysql.com/fr/), because we prefer SQL over NoSQL, and MySQL is the [most popular SQL database system](https://www.eversql.com/most-popular-databases-in-2018-according-to-stackoverflow-survey/)
- Database dumping:
    - mysqldump for dumping the database in 1 file (easy to move for production)
    - mydumper for dumping the database in multiple files (easy to edit)
    - myloader for loading data dumped by mydumper into the database
- authentication: [Passport](http://www.passportjs.org/) is an authentication framework providing access to hundreds of authentication strategies (we will use the JWT strategy)
- Documentation: [Swagger](https://swagger.io/) is well supported by NestJS and gives room for customization
- Tests: [Swagger](https://swagger.io/) (using the file /api/swagger.json) + [Joi](https://github.com/hapijs/joi), a data validation framework. Used alongside, they provide an easy to way to automatically build tests based on the documentation, with litterally 0 effort once the system is set up.

### Database

The database schema is [available online](https://app.quickdatabasediagrams.com/#/d/IwTszG).

### Authentication (WIP: not done yet)

Authentication is operated by Passport. Used alongside with NestJS, it is easy to set up and it provides security to our application.

A strategy (the way a ressource is protected) is defined and each route that requires authentication is guarded by Passport with this strategy.

2 strategies are used:
- a "local" strategy that guards the authentification route (/login). It checks for credentials in the body of the request and provides a JWT that will be returned to the client if the credentials are valid. Else, it returns a 401.
- a JWT strategy that guards every route that requires the request to be authorized. It checks for the presence and validity of a JWT in the request. If the validity test fails, a 401 is returned.

After a validity test is succesfully passed, the controller of the protected route is called. If the test fails, the controller is never called because Passport sends a response with an error code.

## Get started

In order to start the development environment, run:

```
npm start
```

This sets a Docker environment with one container containing the app and one container containing the database.

The database can be accessed from your machine through port 3356.

The app can be accessed from your machine through port 4000.

### Debug

In order to debug the environment, run:

__Be aware that this command will recreate containers, volumes and images, which may imply to data loss.__

```
npm run start:debug
```

### Database management

You can update the database structure (dev and prod) or fixtures (dev only).

In order to update the dump that will be used to create the database structure in prod, from your database, run

```
npm run db:dump:prod
```

In order to update the dev dump of your database (structure and data), from your database, run

```
npm run db:dump
```

Files are saved under ./devops/dev/db

_Note that this will also run npm db:dump:prod for the production database to have the same structure than your dev database_

In order to load the data contained in the SQL files under ./devops/dev/db, to your database, run

```
npm run db:load
```

__IMPORTANT: when editing the SQL dumps made with mydumper, make sure that the syntax is correct and that you keep a newline at the end of the file. myloader will fail SILENTLY to load files that are not formatted correctly.__

## Deployment

The API is deployed in production with Travis, hence you don't need to do anything apart from merging your changes on master.

### Secrets

In the Travis environment, an encrypted archive is decrypted using a key accessible to Travis only.  It contains secret data used in production:
- a private key used to authenticate to the server through ssh and scp
- a .env file that contains secret informations such as the database credentials

The encrypted archive is available on the repository. It can be accessed by anyone, but decrypted only by Travis. Hence, only Travis can read the content of the archive.

If you intend to read or update the content of the archive, you need to contact the repository owner or any contributor who may have the unencrypted files.

_Alternatively, in the future, another way of encrypting the secrets may be used in order for enabling the decryption not only by Travis but also by the contributors, which would make things simpler._

### Docker

The application image is built and pushed to the hub, so it will be available from the server.

The docker environment for production is set up on the server using ssh, scp and a script during the Travis script. This requires the private key corresponding to the project to be available in the CI environment. The encrypted archive contains it. The encrypted archive is decrypted using ssl and a key contained in the Travis environment (no human can access it).
