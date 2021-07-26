export class User {
    nome: string
    sobrenome:string
    email: string
    password: string
    typeuser:string
    constructor(
        nome:string , sobrenome:string ,email: string, password: string ,typeuser:string) 
    {
        this.nome=nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.password = password;
        this.typeuser = typeuser;
    }
}