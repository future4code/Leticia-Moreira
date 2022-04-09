import express, { Request, Response } from "express";
import cors from "cors";


const app = express()

app.use(express.json())
app.use(cors())

type Usuario = {
    id: string,
    nome: string,
    endereço: string|number,
    telefone: number,
    email: string,
    senha: string|number,
}
const usuarios: Usuario[] = [
   
    {
    id: "leom",
    nome: "Leticia de Oliveira Moreira",
    endereço: "Rua Aracaju, 952",
    telefone: 64996325523,
    email: "leticia18moreira@gmail.com",
    senha: "let123456"
    },

]

    

