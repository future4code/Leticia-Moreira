import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response): Promise<void> => {
  try {

    const id = Number();


    await connection("user").insert({
      id,
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      });
      

      res.status(200).send({ message: "User criado" });
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  };


  app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection("User");

    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    

    res.status(200).send();
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }

  app.post("/task", async (req: Request, res: Response): Promise<void> => {
    try {
      
  
      res.status(200).send();
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  

    app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
      try {
        
    
        res.status(200).send();
      } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
      };
    





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app