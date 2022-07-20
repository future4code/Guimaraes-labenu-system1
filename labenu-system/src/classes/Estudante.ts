import { User } from "./User"


export class Estudante extends User{
    public "hobby":string | string[]
    
    constructor(
      id:string,
      nome:string,
      email:string,
      data_nasc:string,
      turma_id:string,
      hobby:string | string[]
    ){
      super(id, nome, email, data_nasc, turma_id)
      this.hobby = hobby
    }

  }