import { Request, Response } from "express";
import connection from "../../connection";

export async function MudarDocenteTurma(req:Request, res:Response) {
    let errorCode = 400

    try {

        const id = req.body.id
        const turma = req.body.turma
    
        const idDaTurma = await connection("LS_Turma")
        .select("id")
        .where("nome","like", turma)
    
        if (idDaTurma.length == 0){
            res.status(errorCode).send("A turma não existe.")
            return
        }
    
        const buscaDocente = await connection("LS_Docente")
        .select("*")
        .where("id", "like", id)

        if (buscaDocente.length == 0) {
            res.status(errorCode).send("O docente digitado não existe.")
            return
        }

        await connection("LS_Docente")
        .update("turma_id", idDaTurma[0].id)
        .where("id", "like", id)

        res.status(200).send("Turma alterada!")

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}