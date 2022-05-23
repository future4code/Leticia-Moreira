import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid'

export async function labecommerce_products(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
  
      if (!req.body.name || !req.body.price || !req.body.image_url) {
        // verificação para pegar os possíveis erros da requisição
        // normalmente serão necessárias várias verificações
        throw new Error("Preencha os campos corretamente");
      }
  
  
       
      const result = await connection("products"); // essa função irá retornar todos os valores da tabela "Users"
      // lembre-se de alterar o nome da tabela
  
  
  
      res.status(200).send({ message: "Sucesso", data: result }); // retorna para usuário em caso de sucesso
      // lembre-se de alterar a message a cada endpoint e deixar o data apenas quando necessário 
  
      
    } catch (error: any) {
      res.status(400).send(error.message); // retorna para usuário em caso de erro
    }
  }