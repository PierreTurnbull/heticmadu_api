# heticmadu_api

This repository contains the API for the project heticmadu.

The production API is available here: http://52.47.64.108:4000/ 

The database system is not accessible from outside the server.

The API documentation will be available here: http://52.47.64.108:4000/api (WIP)

## Stack

- API framework: [NestJS](https://nestjs.com/) enables building a strong, complex API using TypeScript and that supports various tools such as ORM frameworks, authentication middlewares or documentation frameworks.
- ORM: [TypeORM](https://typeorm.io/#/)
- Database system: [MySQL](https://www.mysql.com/fr/)
- authentication: [Passport](http://www.passportjs.org/) is an authentication framework providing access to hundreds of authentication strategies (we will use the JWT strategy)
- Documentation: [Swagger](https://swagger.io/)
- Tests: [Swagger](https://swagger.io/) (using the file /api/swagger.json) + [Joi](https://github.com/hapijs/joi), a data validation framework

### Database

The database schema is [available online](https://app.quickdatabasediagrams.com/#/d/IwTszG).

### Authentication

Authentication is operated by Passport. Used alongside with NestJS, it is easy to set up and it provides security to our application.

A strategy (the way a ressource is protected) is defined and each route that requires authentication is guarded by Passport with this strategy.

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