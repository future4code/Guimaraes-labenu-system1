import { Request, Response } from "express";
// import { Turma } from "../classes/Turma";
import { v4 as generateId } from "uuid";
import { Turma } from "../classes/Turma";
import connection from "../connection";

export async function criarTurma(req:Request, res:Response) :Promise<void> {
    let errorCode = 400
    try {
        const {nome, docente, estudante, modulo}:Turma = req.body

        if(!nome || !docente || !estudante || !modulo) {
            errorCode = 400
            res.send("Todos os campos são obrigatórios.")
        }

        await connection("LS_Turma")
        .insert({
            id: generateId(),
            nome:nome,
            docente:docente,
            estudante:estudante,
            modulo:modulo
        })     
        
        res.status(200).send("Turma criada!")

    } catch (error:any) {
        console.log(error)
        console.error(error)
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}