import { Request, Response } from "express";
import { MODULO } from "../../classes/turma";
import connection from "../../connection";

export async function MudarTurmaModulo(req:Request, res:Response) {
    let errorCode = 400

    try {

        const nome = req.params.nome
        const modulo = req.body.modulo
    
        if (!(Object.values(MODULO).includes(modulo))) {
            res.send("Módulo inválido!")
            return
        }
    
        const buscaTurma = await connection("LS_Turma")
        .select("*")
        .where("nome", "like", nome)
    
        if (buscaTurma.length == 0) {
            res.status(404).send("A turma digitada não existe.")
            return
        }

        await connection("LS_Turma")
        .update("modulo", modulo)
        .where("nome", "like", nome)

        res.status(200).send("Módulo alterado!")

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}