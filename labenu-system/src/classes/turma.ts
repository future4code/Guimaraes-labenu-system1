export enum MODULO {
	MODULO_0 = "0", 
	MODULO_1 = "1",
	MODULO_2 = "2",
	MODULO_3 = "3",
	MODULO_4 = "4",
	MODULO_5 = "5",
	MODULO_6 = "6",      
} 

export class Turma {
    "id": string
    "nome": string
    "modulo": MODULO
    
    constructor(
        id:string,
        nome:string,
        modulo:MODULO
    ) 
    {
    this.id = id;
    this.nome = nome;
    this.modulo = modulo
    }
}
