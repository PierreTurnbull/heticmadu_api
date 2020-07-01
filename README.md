# heticmadu_api

This repository contains the API for the project heticmadu.

## Contributors

- Pierre Turnbull
- Billal Ouaali

## Stack

- API framework: [NestJS](https://nestjs.com/) enables building a strong, complex API using TypeScript. It supports various tools such as ORM frameworks, authentication middlewares or documentation frameworks.
- ORM: [TypeORM](https://typeorm.io/#/) is well supported by NestJS, powerful and very popular.
- Database system: [MySQL](https://www.mysql.com/fr/), because we prefer SQL over NoSQL, and MySQL is the [most popular SQL database system](https://www.eversql.com/most-popular-databases-in-2018-according-to-stackoverflow-survey/)
- Database dumping:
  - mydumper for dumping the database in multiple files
  - myloader for loading tables dumped by mydumper and hand written fixtures into the database
  - [TypeORM's migration system](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md) for versionning the database and safely update the production database
- authentication: [Passport](http://www.passportjs.org/) is an authentication framework providing access to hundreds of authentication strategies (we use the JWT strategy and the local strategy)
- Documentation: [Swagger](https://swagger.io/) is well supported by NestJS and gives room for customization
- Tests: [Swagger](https://swagger.io/) (using the file /api/swagger.json) + [Joi](https://github.com/hapijs/joi), a data validation framework. Used alongside, they provide an easy way to automatically build tests based on the documentation, with litterally 0 effort once the system is set up.

### Database

The database schema is [available online](https://app.quickdatabasediagrams.com/#/d/IwTszG).

### Authentication

Authentication is operated by Passport. Used alongside with NestJS, it is easy to set up and it provides security to our application.

A strategy (the way a ressource is protected) is defined and each route that requires authentication is guarded by Passport with this strategy.

2 strategies are used:
- a "local" strategy that guards the authentification route (/auth/login). It checks for credentials in the body of the request and provides a JWT to the client if the credentials are valid. Otherwise, it returns a 401.
- a JWT strategy which checks that the user is authenticated. It checks for the presence and validity of a JWT in the request header. If the validity test fails, a 401 is returned.

After a validity test is succesfully passed, the controller of the protected route is called. If the test fails, the controller is never called because Passport returns a response with an error code.

Whenever building a new route that must be protected, attach the jwt guard to it:

```
@UseGuards(AuthGuard('jwt'))
// controller here
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

__Be aware that this command will recreate containers, volumes and images, which imply losing all persisted data.__

```
npm run start:debug
```

### Database management

#### TL;DR workflow

Make changes to the database by changing TypeORM entities.

When done working, run `npm run migration:create` to create a migration script. If another migration script is created before merging the pull request, delete the first one, for only 1 migration script must be added to the base branch.

Write dev fixtures in `./devops/dev/db/heticmadu.<table_name>.sql` (triple-check the content syntax to avoid silent failures) and load them into the database with `npm run db:load`.

The following explains this workflow in detail.

#### Structure

TypeORM entities define the structure of the database. If you must update the structure of the database, update the entities. Changes will be reflected on the database.

Once you are done working on the database structure, you can create a migration file.

```
npm run migration:create
```

This will fetch the production database informations, create an configuration for TypeORM in `ormconfig.json` and create a migration script under `./devops/prod/db/migrations/<timestamp>-heticmadu-prod.ts`.

Be aware that this migration file compares the current development code with the production database. Migrations are applied only in CI, you should not have to do it manually. If you create another migration file without having applied (in CI) the previous one to the production database, it will fail applying the new migration file, since the latter will compare the development database state with an obsolete version of the production database state.

To better understand how it works, here is an example:

```
prod db has state A
development db has state A
development db changes and now has state B
migration script 1 is created and compares state A with state B
development db changes and now has state C
migration script 2 is created and compares state A with state C
changes are pushed on the base branch:
  migration script 1 (from state A to state B) is applied and db now has state B
    migration script 2 therefore becomes obsolete
  migration script 2 (from state A to state C) cannot be applied because db has state B and is expected to have state A
```

In other words, on 1 dev branch, each migration script override the previous one that was created on this branch. Only 1 migration script must be added to the base branch.

This could be simplified by moving migration script creations to the CI environment. However the developer must have control over the migration script, so it must be done manually. For example, you may add a new field to a table, and all existing rows in this table should be given a value (that is not the default value) to this field. This cannot be done automatically.

#### Fixtures

You can write fixtures for the development database under `./devops/dev/db/heticmadu.<table_name>.sql`.

Load them into the database base by running

```
npm run db:load
```

First, it will dump the database structure and load it back in the database. This is required in order to empty all the tables before filling them with data. Then it will load the fixtures into the database.

__IMPORTANT: make sure that the syntax of the script is correct and that you keep a newline at the end of the file. myloader will fail SILENTLY to load files that are not formatted correctly.__


## Deployment

The API is deployed in production with Travis. Push your changes on the base branch to trigger a deployment.

### Secrets

#### Travis settings

Sensitive informations such as the dockerhub or db credentials are stored as secrets in the settings of this repository on Travis.

#### Encrypted archive

Some sensitive informations, such as files, cannot be stored in the settings, so we use an encrypted archive to stored them.

In the Travis environment, the encrypted archive is decrypted using a key accessible to Travis only.  It contains secret data used in production:
- a private key used to authenticate to the server through ssh and scp
- a .env file that contains secret informations such as the database credentials

The encrypted archive is available on the repository. It can be accessed by anyone, but decrypted only by Travis. Hence, only Travis can read the content of the archive.

If you intend to read or update the content of the archive, you need to contact the repository owner or any contributor who may have the unencrypted files.

Otherwise, you can run `build:enc` to override the encrypted file with a new one.

_In the future, another way of encrypting the secrets may be used in order for enabling the decryption not only by Travis but also by the contributors, which would make things simpler._

### Docker

The application image is built and pushed to the hub, so it will be available from the server.

The docker environment for production is set up on the server using ssh, scp and a script during the Travis script. This requires the private key corresponding to the project to be available in the CI environment. The encrypted archive contains it. The encrypted archive is decrypted using ssl and a key contained in the Travis environment (no human can access it).
