import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Docente} from "../../classes/Docente";
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
            res.status(errorCode).send("A(s) especialidade(s) deve(m) vir em forma de array!")
            return
        }

        const novoDocente = new Docente(id, nome, email, data_nasc, turma_id)
        await connection("LS_Docente")
        .insert(novoDocente)

        for (let e of especialidade) {
            let buscaEspecialidade = await connection("LS_Especialidade")
            .select("id")
            .where("nome_especialidade", "like", e.toLowerCase())

            const response = await connection("LS_Docente")
            .select("id")
            .where("email", "like", email)

            if (buscaEspecialidade.length === 0) {
                await connection("LS_Docente_Especialidade").delete().where("id_docente", "like", response[0].id)
                await connection("LS_Docente").delete().where("email", "like", email)
                res.send("Uma ou mais especialidades digitadas não existem.")
                return
            }

            await connection("LS_Docente_Especialidade")
            .insert({
                id: generateId(),
                id_docente: response[0].id,
                id_especialidade: buscaEspecialidade[0].id
            })
        }

        res.status(200).send("Docente cadastrado!")

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}