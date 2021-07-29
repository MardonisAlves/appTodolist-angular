export class Tarefas {
    id:Number
    local: string
    nome: string
    status: boolean
    UserId: number
    valor: number
    data: Date

    constructor(
        id: Number , 
        local: string, 
        nome: string, 
        status: boolean, 
        UserId: number,
         valor: number,
         data: Date) 
    {
        this.id=id
        this.local = local.toLowerCase()
        this.nome = nome.toLowerCase()
        this.status = status
        this.UserId = UserId
        this.valor = valor
        this.data = data
    }

}