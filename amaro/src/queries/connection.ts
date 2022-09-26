import dotenv from "dotenv"



dotenv.config()

export const connection = Knex({
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

function Knex(arg0: { client: string; connection: { host: string | undefined; port: number; user: string | undefined; password: string | undefined; database: string | undefined; multipleStatements: boolean } }) {
    throw new Error("Function not implemented.")
}
