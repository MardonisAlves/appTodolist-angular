export class Tarefas {
    local: string
    nome: string
    status: boolean
    userid: number
    valor: number
    data: Date

    constructor(local: string, nome: string, status: boolean, userid: number, valor: number, data: Date) {
        this.local = local
        this.nome = nome
        this.status = status
        this.userid = userid
        this.valor = valor
        this.data = data
    }

}