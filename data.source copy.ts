import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    entities: [],
    migrations: [],
});

export function createConnection(host = "database"): Promise<DataSource> {
    return dataSource.setOptions({ host }).initialize();
}
export default dataSource;
