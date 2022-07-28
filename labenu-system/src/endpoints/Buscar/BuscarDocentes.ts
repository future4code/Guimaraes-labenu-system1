import { Request, Response } from "express";
import connection from "../../connection";


export async function BuscarDocentes(req:Request, res:Response) {
    let errorCode = 400
    
    try {

        const response = await connection("LS_Docente")
        .select("*")

        res.status(200).send(response)

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
    
}