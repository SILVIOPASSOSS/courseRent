import "reflect-metadata";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
    // TypeORM PostgreSQL DB Drivers
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    // Database name
    database: "rentx",
    // Synchronize database schema with entities
    synchronize: false,
    migrations: ["src/modules/database/migrations/*{.ts,.js}"],
});

export default dataSource;
