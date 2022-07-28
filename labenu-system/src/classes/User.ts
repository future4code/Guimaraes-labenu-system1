export class User {
    public "id": string
    public "nome": string
    public "email": string
    public "data_nasc": string
    public "turma_id": string

    constructor(
        id:string,
        nome:string,
        email:string,
        data_nasc:string,
        turma_id:string
    )
    {   
        console.log("Chamando o constructor da Classe User")
        this.id = id,
        this.nome = nome,
        this.email = email,
        this.data_nasc = data_nasc
        this.turma_id = turma_id
    }
}