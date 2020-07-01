# apply the migration script once per deployment.

[ "$DB_MIGRATION_DONE" = 0 ] && DB_MIGRATION_DONE=1
ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run --config devops/prod/db/ormconfig.js