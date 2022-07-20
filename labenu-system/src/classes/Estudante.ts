import { User } from "./User"

export enum HOBBIES {
    ASSITIR_SERIE = "Assistir séries de TV", 
    JOGAR_VIDEO_GAME =  "Jogar vídeogame",
    SAIR_COM_AMIGOS = "Sair com amigos",
    PRATICAR_ESPORTES = "Praticar esportes"      
 } 
 
export class Estudante extends User{
    public "hobby" : HOBBIES
    
    constructor(
      id:string,
      nome:string,
      email:string,
      dataNasc:string,
      turmaId:string,
      hobby:HOBBIES
    ){
      super(id, nome, email, dataNasc, turmaId)
      this.hobby = hobby
    }
 
  }