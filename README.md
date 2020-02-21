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
- a "local" strategy that guards the authentification route (/auth/login). It checks for credentials in the body of the request and provides a JWT that will be returned to the client if the credentials are valid. Else, it returns a 401.
- a JWT strategy that guards every route that requires the request to be authorized. It checks for the presence and validity of a JWT in the request header. If the validity test fails, a 401 is returned.

After a validity test is succesfully passed, the controller of the protected route is called. If the test fails, the controller is never called because Passport sends a response with an error code.

Whenever building a new route that must be protected, add the guard decorator to it for the request to be verified before reaching the controller:

```
// @UseGuards(AuthGuard('jwt'))
```

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

__Be aware that this command will recreate containers, volumes and images, which may imply data loss.__

```
npm run start:debug
```

### Database management

#### Structure

TypeORM entities define the structure of the database. If you must update the structure of the database, update the entities. Changes will be reflected on the database.

Once you are done working on the database structure, you can dump it by running

```
npm run db:dump:prod
```

This will generate a 1 file dump corresponding to the structure of the database, which will be used to initialize the production database.

If you need to change the structure of the already existing production database, you must do it by hand, after having backed-up its data, since there may be conflicts between the old data and the new structure. Back-ups and automatization of production database structure updates will be implemented later.

#### Fixtures

You can write fixtures for the development database under `./devops/dev/db/heticmadu.<table_name>.sql`.

Load them into the database base by running

```
npm run db:load
```

First, it will dump the database structure and load it back in the database. This is required in order to empty all the tables before filling them with data. Then it will load the fixtures into the database.

__IMPORTANT: make sure that the syntax is correct and that you keep a newline at the end of the file. myloader will fail SILENTLY to load files that are not formatted correctly.__


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
