
export enum ESPECIALIDADES {
    REACT = "React", 
    JS = "JS",
    CSS = "CSS",
    TYPESCRIPT = "Typescript",
    PROGRAMACAO_ORIENTADA_A_OBJETO = "Programacao Orientada a Objetos",
           
 } 


export class docentes {
   private "id": string
   public "nome": string
   public "email": string
   public "data_de_nascimento": string
   public "turma_id": string
   public "especialidades": ESPECIALIDADES[]

    
    constructor(id:string , nome:string, email: string, data_de_nascimento:string, turma_id:string,especialidades:ESPECIALIDADES[] ,) {
      this.id = id
      this.nome = nome
      this.email = email
      this.data_de_nascimento = data_de_nascimento
      this.turma_id = turma_id
      this.especialidades = especialidades
      
    }
  }