
export enum HOBBIES {
    ASSITIR_SERIE = "Assistir séries de TV", 
    JOGAR_VIDEO_GAME =  "Jogar vídeogame",
    SAIR_COM_AMIGOS = "Sair com amigos",
    PRATICAR_ESPORTES = "Praticar esportes"   
           
 } 
 
export class estudantes {
    "id": string
    "nome": string
    "email": string
    "data_de_nascimento": string
    "turma_id": string
    "hobbies": HOBBIES[]

    
    constructor(id:string , nome:string, email: string, data_de_nascimento:string, turma_id:string,hobbies:HOBBIES[]) {
      this.id = id
      this.nome = nome
      this.email = email
      this.data_de_nascimento = data_de_nascimento
      this.turma_id = turma_id
      this.hobbies = hobbies
     
    }
  }