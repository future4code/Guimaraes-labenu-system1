import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Docente } from "../../classes/Docente";
import { MODULO, Turma } from "../../classes/turma";
import connection from "../../connection";


export async function criarTurma(req:Request, res:Response) :Promise<void> {
    let errorCode = 400
    try {
        const {nome, modulo}:Turma = req.body
        const id = generateId()

        if (!(Object.values(MODULO).includes(modulo))) {
            res.send("Módulo inválido!")
            return
        }

        if(!nome) {
            errorCode = 400
            res.send("Insira o nome da Turma.")
        }

        const novaTurma = new Turma(id, nome, modulo)

        await connection("LS_Turma")
        .insert(novaTurma)
        
        res.status(200).send("Turma criada!")

    } catch (error:any) {
        console.log(error)
        console.error(error)
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}




