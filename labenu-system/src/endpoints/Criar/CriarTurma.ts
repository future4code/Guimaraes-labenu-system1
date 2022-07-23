import { Request, Response } from "express";
// import { Turma } from "../classes/Turma";
import { v4 as generateId } from "uuid";
import { Docente } from "../../classes/Docente";
import { Estudante } from "../../classes/Estudante";
import { MODULO, Turma } from "../../classes/turma";
import connection from "../../connection";


export async function criarTurma(req:Request, res:Response) :Promise<void> {
    let errorCode = 400
    try {
        const {nome, modulo}:Turma = req.body

        if (!(Object.values(MODULO).includes(modulo))) {
            res.send("Módulo inválido!")
            return
        }

        if(!nome) {
            errorCode = 400
            res.send("Todos os campos são obrigatórios.")
        }

        await connection("LS_Turma")
        .insert({
            id: generateId(),
            nome,
            modulo
        })
        
        res.status(200).send("Turma criada!")

    } catch (error:any) {
        console.log(error)
        console.error(error)
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}




