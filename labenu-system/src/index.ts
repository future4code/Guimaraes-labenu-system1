import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";
import { criarTurma } from "./endpoints/Criar/CriarTurma";
import { criarEstudante } from "./endpoints/Criar/CriarEstudante";
// import { v4 as generateId } from "uuid"

// TESTANDO FUNCIONAMENTO DA API
app.get('/test', (req:Request, res:Response) => {
    res.status(200).send("Api funcionando!")
}); 

app.post('/turma', criarTurma)
app.post("/estudante", criarEstudante)