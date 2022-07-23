import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Estudante } from "../../classes/Estudante";
import connection from "../../connection";


export async function criarEstudante(req:Request, res:Response):Promise<void> {
    let errorCode = 400
    try {
        const {nome, email, data_nasc, turma_id, hobby}:Estudante = req.body
        const id = generateId()

        if(!nome || !email || !data_nasc || !turma_id) {
            errorCode = 400
            res.status(400).send("Todos os campos são obrigatórios.")
        }

        if (typeof(hobby) != "object") {
            res.status(400).send("O hobby deve vir em forma de array!")
            return
        }

        const novoEstudante = new Estudante(id, nome, email, data_nasc, turma_id)
        
        await connection("LS_Estudante")
        .insert(novoEstudante)

        for (let h of hobby) {
            let buscaHobby = await connection("LS_Hobby")
            .select("id")
            .where("nome_hobby", "like", h)

            if (buscaHobby.length === 0) {
                await connection("LS_Hobby")
                .insert({
                    id: generateId(),
                    nome_hobby: h
                })

                buscaHobby = await connection("LS_Hobby")
                .select("id")
                .where("nome_hobby", "like", h)
            } 

            const response = await connection("LS_Estudante")
            .select("id")
            .where("email" ,"like", email)

            await connection("LS_Hobby_Estudante")
            .insert({
                id:generateId(),
                id_estudante: response[0].id,
                id_hobby: buscaHobby[0].id
            })
        }
        res.status(200).send("Aluno cadastrado!")
        return

    } catch (error:any) {
        console.log(error)
        console.error(error)
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}