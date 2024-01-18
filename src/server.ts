import { app } from "./app";
import { createConnection } from "./database/data-source";

createConnection()
    .then(() => {
        app.listen(3333, () => {
            console.log("Server is running");
        });
    })
    .catch((error) => {
        console.error("Error establishing database connection:", error);
    });

// app.listen(3333, () => console.log("Server is running"));
