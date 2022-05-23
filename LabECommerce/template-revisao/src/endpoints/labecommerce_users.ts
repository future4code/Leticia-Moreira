import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid'

// nessa função serão feitas:
// 1) as verificações dos dados que vem da requisição
// 2) o envio da consulta(query) ao banco de dados
// 3) verificação das resposta (para métodos GET)
// 4) envio da respota para o front

// idealmente cada função de endpoint deve ter um arquivo próprio

export async function labecommerce_users(
  req: Request,
  res: Response
): Promise<void> {
  
    try {

      const{ name, email, password} = req.body

      await connection("users")
      .insert({name, email, password})

    
    const id = generateId() // a lib uuid é usada para gerar ID aleatórios


   res.status(200).send({ message: "Sucesso"}); // retorna para usuário em caso de sucesso
    // lembre-se de alterar a message a cada endpoint e deixar o data apenas quando necessário 

    
  } catch (error: any) {
    res.status(400).send(error.message); // retorna para usuário em caso de erro
  }
}
