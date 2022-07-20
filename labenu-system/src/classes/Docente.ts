import { User } from "./User"

export enum ESPECIALIDADES {
    REACT = "React", 
    JS = "JS",
    CSS = "CSS",
    TYPESCRIPT = "Typescript",
    PROGRAMACAO_ORIENTADA_A_OBJETO = "Programacao Orientada a Objetos",    
 } 

export class Docente extends User {
   
   public "especialidade": ESPECIALIDADES
    
    constructor(
      id:string,
      nome:string,
      email:string,
      dataNasc:string,
      turmaId:string,
      especialidade: ESPECIALIDADES
    ) {
      super(id, nome, email, dataNasc, turmaId)
      this.especialidade = especialidade
    }
  }