import { Request, Response } from "express";
// import { Turma } from "../classes/Turma";
import { v4 as generateId } from "uuid";
import { Docente } from "../classes/Docente";
import { Estudante } from "../classes/Estudante";
import { MODULO, Turma } from "../classes/turma";
import connection from "../connection";

export async function criarTurma(req:Request, res:Response) :Promise<void> {
    let errorCode = 400
    try {
        const {nome, modulo}:Turma = req.body

        if (!(Object.values(MODULO).includes(modulo))) {
            res.send("Módulo inválido!")
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

export async function criarAluno(req:Request, res:Response):Promise<void> {
    let errorCode = 400
    try {
        const {nome, email, data_nasc, turma_id, hobby}:Estudante = req.body

        if(!nome || !email || !data_nasc || !turma_id || !hobby) {
            errorCode = 400
            res.send("Todos os campos são obrigatórios.")
        }
        
        await connection("LS_Estudante")
        .insert({
            id:generateId(),
            nome,
            email,
            data_nasc: data_nasc,
            turma_id: turma_id
        })




        if (typeof(hobby) == "object") {
            for (let h of hobby) {
                let buscaHobby = await connection("LS_Hobby")
                .select("id")
                .where("nome_hobby", "like", h)
                console.log(buscaHobby)

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
                console.log(response[0].id)
                console.log()

                await connection("LS_Hobby_Estudante")
                .insert({
                    id:generateId(),
                    id_estudante: response[0].id,
                    id_hobby: buscaHobby[0].id
                })
            }
            res.status(200).send("Aluno cadastrado!")
            return
        }





        let buscaHobby = await connection("LS_Hobby")
        .select("id")
        .where("nome_hobby", "like", hobby)
        console.log(buscaHobby)


        if (buscaHobby.length === 0) {
            await connection("LS_Hobby")
            .insert({
                id: generateId(),
                nome_hobby: hobby
            })

            buscaHobby = await connection("LS_Hobby")
            .select("id")
            .where("nome_hobby", "like", hobby)
        } 

        

        const response = await connection("LS_Estudante")
        .select("id")
        .where("email" ,"like", email)
        console.log(response[0].id)
        console.log()

        await connection("LS_Hobby_Estudante")
        .insert({
            id:generateId(),
            id_estudante: response[0].id,
            id_hobby: buscaHobby[0].id
        })

        res.status(200).send("Aluno cadastrado!")



    } catch (error:any) {
        console.log(error)
        console.error(error)
        res.status(errorCode).send(error.message || error.sqlMessage)


    }
}


export async function criarDocente(req:Request, res:Response):Promise<void> {
    let errorCode = 400
    try {
        const {nome, email, data_nasc, turma_id}:Docente = req.body

        if(!nome || !email || !data_nasc || !turma_id) {
            errorCode = 400
            res.send("Todos os campos são obrigatórios.")
        }
        
        await connection("LS_Docente")
        .insert({
            id:generateId(),
            nome,
            email,
            data_nasc: data_nasc,
            turma_id: turma_id
        })
        res.status(200).send("Aluno cadastrado!")

    } catch (error:any) {
        console.log(error)
        console.error(error)
        res.status(errorCode).send(error.message || error.sqlMessage)


    }
}