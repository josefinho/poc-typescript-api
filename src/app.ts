import { PostgresDataSource } from "./config/data-source";

PostgresDataSource.initialize()
    .then(() => {
        console.log("DataSouce has been initialized.")
    })
    .catch(err => console.log("Error on DataSouce initialization.", err));


