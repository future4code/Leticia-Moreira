import { connection } from "./connection"
import { produtos } from "../produtos"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

// Construindo as tabelas para seram automaticamente criadas no mysql workbench.
const createTables = () => connection
   .raw(`
         CREATE TABLE IF NOT EXISTS amaro_products (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        tags VARCHAR(255) NOT NULL
      );
  `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)


const insertProducts = () => connection("amaro_products")
   .insert(produtos)
   .then(() => { console.log("Produtos criadas") })
   .catch(printError)


const closeConnection = () => { connection.destroy() }


createTables()
   .then(insertProducts)
   .finally(closeConnection) 