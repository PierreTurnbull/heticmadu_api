require('dotenv').config({
  path: 'devops/prod/secrets/.env'
});

// config for typeorm CLI migration tool
module.exports = {
  type: 'mysql',
  host: 'localhost', // tmp, replace with ansible var
  port: '3356', // process.env.DB_PORT,
  username: 'admin', // process.env.DB_USER,
  password: 'admin', // process.env.DB_PASSWORD,
  database: 'heticmadu', // process.env.DB_SCHEMA
  entities: [
    'src/**/*.entity.ts'
  ],
  migrations: [
    'devops/prod/db/migrations/*.ts'
  ],
  cli: {
    migrationsDir: 'devops/prod/db/migrations'
  }
}
