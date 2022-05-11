import { app } from "./app";
import { testeEndpoint } from "./endpoints/testeEndpoint";

// o arquivo index.ts irá organizar as os endpoints da aplicação, todos se conectam ao servidor pelo app
// indicando o método utilizado (GET, POST, PUT ou DELETE), o caminho da URL e a função que será chamada 


app.get("/teste", testeEndpoint)