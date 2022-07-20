import { Docente } from "./Docente"
import { Estudante } from "./Estudante"

export enum MODULO {
    MODULO_0 = "Aulas não iniciadas", 
    MODULO_1 = "Módulo 1",
    MODULO_2 = "Módulo 2",
    MODULO_3 = "Módulo 3",
    MODULO_4 = "Módulo 4",
    MODULO_5 = "Módulo 5",
    MODULO_6 = "Módulo 6",      
 } 

export class Turma {
    "id": string
    "nome": string
    "docente": Docente
    "estudante": Estudante
    "modulo": MODULO
    
    constructor(
        id:string,
        nome:string,
        docente:Docente,
        estudante:Estudante,
        modulo:MODULO
      ) 
      {
      this.id = id;
      this.nome = nome;
      this.docente = docente
      this.estudante = estudante
      this.modulo = modulo
    }
  }
