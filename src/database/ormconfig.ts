import { join } from 'path';
import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
    "type": "mysql",
    "host": process.env.MYSQL_HOST,
    "port": 3306,
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE_NAME,
    "migrationsTableName": "migrations",
    "entities": [
        join(__dirname, '../entities/*{.ts,.js}'),
    ],
    // We are using migrations, synchronize should be set to false.
    "synchronize": false,
    "dropSchema": false,
    "migrations": [
        join(__dirname, 'migrations/*{.ts,.js}')
    ],
    "cli": {
        "entitiesDir": "src/entities",
        migrationsDir: 'src/database/migrations'
    }
}

export = connectionOptions