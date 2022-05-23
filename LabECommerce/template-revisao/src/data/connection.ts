import knex from "knex"
import dotenv from "dotenv"

// a lib knex faz a conexão com o banco de dados do MySQL
// o dotenv armazena os dados sensíveis (senhas e afins) como variáveis de ambiente no arquivo .env
// vá para o arquivo .env é preencha ele com as informações do seu banco de dados 
// lembre-se sempre de inserir o arquivo .env no seu .gitignore para os dados não subirem no github 


dotenv.config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      multipleStatements: true
   }
})