import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Docente, ESPECIALIDADES } from "../../classes/Docente";
import connection from "../../connection";


export async function criarDocente(req:Request, res:Response):Promise<void> {
    let errorCode = 400
    try {
        const {nome, email, data_nasc, turma_id, especialidade}:Docente = req.body
        const id = generateId()

        if(!nome || !email || !data_nasc || !turma_id || !especialidade) {
            errorCode = 400
            res.send("Todos os campos são obrigatórios.")
        }

        if (typeof(especialidade) != "object") {
            res.status(400).send("O hobby deve vir em forma de array!")
            return
        }

        if (!(Object.values(ESPECIALIDADES).includes(especialidade))) {
            res.send("Verifique as especialidades digitadas!")
            return
        }

        const newDocente = new Docente(id, nome, email, data_nasc, turma_id, especialidade)
        
        await connection("LS_Docente")
        .insert({
            newDocente
        })
        res.status(200).send("Aluno cadastrado!")

    } catch (error:any) {
        console.log(error)
        console.error(error)
        res.status(errorCode).send(error.message || error.sqlMessage)


    }
}