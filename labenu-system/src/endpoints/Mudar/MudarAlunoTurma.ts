import { Request, Response } from "express";
import connection from "../../connection";

export async function MudarAlunoTurma(req:Request, res:Response) {
    let errorCode = 400

    try {

        const id = req.body.id
        const turma = req.body.turma
    
        const idDaTurma = await connection("LS_Turma")
        .select("id")
        .where("nome","like", turma)
    
        if (idDaTurma.length == 0){
            errorCode = 404
            res.status(errorCode).send("A turma não existe.")
            return
        }
    
        const buscaAluno = await connection("LS_Estudante")
        .select("*")
        .where("id", "like", id)
        
        if (buscaAluno.length == 0) {
            errorCode = 404
            res.status(errorCode).send("O aluno digitado não existe.")
            return
        }

        await connection("LS_Estudante")
        .update("turma_id", idDaTurma[0].id)
        .where("id", "like", id)

        res.status(200).send("Turma alterada!")

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}