import { Request, Response } from "express";
import connection from "../../connection";


export async function BuscarAlunos(req:Request, res:Response) {

    let errorCode = 400
    
    try {

        const nome = req.query.nome
        
        if (!nome) {
            const response = await connection("LS_Estudante")
            .select("*")

            res.status(200).send(response)
            return
        }

        const response = await connection("LS_Estudante")
        .select("*")
        .where("nome", "like", `%${nome}%`)

        res.status(200).send(response)

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
    
}