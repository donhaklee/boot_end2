import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres1.cjgey7etbf14.us-west-2.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [
        "src/entities/**/*.ts"
    ],
    migrations: [],
    subscribers: [],
})
