import { DataSource } from "typeorm";

import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1705235130781 } from "./migrations/1705235130781-CreateCategories";
import { CreateSpecifications1705264658151 } from "./migrations/1705264658151-CreateSpecifications";
import { CreateUsers1705309978493 } from "./migrations/1705309978493-CreateUsers";
import { AlterUserDeleteUsername1705397228434 } from "./migrations/1705397228434-AlterUserDeleteUsername";
import { AlterUserAddAvatar1705481662082 } from "./migrations/1705481662082-AlterUserAddAvatar";

const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    synchronize: false,
    logging: false,
    entities: [User, Category, Specification],
    migrations: [
        CreateCategories1705235130781,
        CreateSpecifications1705264658151,
        CreateUsers1705309978493,
        AlterUserDeleteUsername1705397228434,
        AlterUserAddAvatar1705481662082,
    ],
});

export function createConnection(host = "database"): Promise<DataSource> {
    return dataSource.setOptions({ host }).initialize();
}
export default dataSource;
