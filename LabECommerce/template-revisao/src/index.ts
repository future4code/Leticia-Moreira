import { app } from "./app";
import { labecommerce_users } from "./endpoints/labecommerce_users";
import { labecommerce_products } from "./endpoints/labecommerce_products";
import { labecommerce_purchases } from "./endpoints/labecommerce_purchases"

// o arquivo index.ts irá organizar as os endpoints da aplicação, todos se conectam ao servidor pelo app
// indicando o método utilizado (GET, POST, PUT ou DELETE), o caminho da URL e a função que será chamada 


app.post("/users", labecommerce_users)
app.post("/products", labecommerce_products)
app.post("/purchases", labecommerce_purchases)
