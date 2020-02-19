# heticmadu_api

This repository contains the API for the project heticmadu.

## Stack

- API framework: [NestJS](https://nestjs.com/)
- ORM: [TypeORM](https://typeorm.io/#/)
- Database system: [MySQL](https://www.mysql.com/fr/)
- Documentation: [Swagger](https://swagger.io/)
- Tests: [Swagger](https://swagger.io/) (file /api/swagger.json) + [Joi](https://github.com/hapijs/joi)

// todo : expliquer les libs à quoi elles servent
// schema de bdd dans le dossier
// explications pour l'authentification
// liens vers l'api déployée et la documentation de l'api déployée

// ansible d0escription brève des rôles
// ansible exemple de commande pour lancer les ressources et variables à remplacer
// terraform description brève des différentes ressources

## Get started

In order to start the development environment, run:

```
npm start
```

In order to debug the environment, run:

__Be aware that this command will recreate containers, volumes and images.__

```
npm run start:debug
```

This sets a Docker environment with one container containing the app and one container containing the database.

The database can be accessed from your machine through port 3356.

The app can be accessed from your machine through port 4000.