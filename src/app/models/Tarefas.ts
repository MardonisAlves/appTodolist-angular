export class Tarefas {
    id:Number
    local: string
    nome: string
    status: boolean
    userid: number
    valor: number
    data: Date

    constructor(
        id: Number , 
        local: string, 
        nome: string, 
        status: boolean, 
        userid: number,
         valor: number,
         data: Date) 
    {
        this.id=id
        this.local = local
        this.nome = nome
        this.status = status
        this.userid = userid
        this.valor = valor
        this.data = data
    }

}