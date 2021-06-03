import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export class User {
    nome: string
    sobrenome:string
    email: string
    password: string
    constructor(nome:string , sobrenome:string ,email: string, password: string) {
        this.nome=nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.password = password;
    }
}