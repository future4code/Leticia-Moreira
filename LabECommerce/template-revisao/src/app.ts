import express from "express"
import cors from "cors"
import { AddressInfo } from "net"

// o arquivo app.ts faz o setup do servidor usado a lib "express", configurando para rodar na porta 3003 por padrão,
// para iniciar o servidor em modo de desenvolvedor, use o comando: npm run dev 


export const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})