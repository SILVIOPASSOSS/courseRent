import "reflect-metadata";
import { DataSource } from "typeorm";

const connectionSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    synchronize: false,
    logging: false,
    entities: ["src/database/entities/**/*.entity{.ts,.js}"],
    migrations: ["src/database/migrations/**/*{.tsm,.js}"],
    subscribers: ["src/database/subscribers/**/*{.ts,.js}"],
    cli: {
        migrationsDir: "./src/database/migrations",
    },
});

export function createConnection(host = "database"): Promise<DataSource> {
    return connectionSource.setOptions({ host }).initialize();
}
export default connectionSource;
