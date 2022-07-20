export class User {
    public "id": string
    public "nome": string
    public "email": string
    public "dataNasc": string
    public "turmaId": string

    constructor(
        id:string,
        nome:string,
        email:string,
        dataNasc:string,
        turmaId:string
    )
    {   
        console.log("Chamando o constructor da Classe User")
        this.id = id,
        this.nome = nome,
        this.email = email,
        this.dataNasc = dataNasc
        this.turmaId = turmaId
    }
}