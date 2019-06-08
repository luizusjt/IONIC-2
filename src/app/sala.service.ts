import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class SalaService {
    constructor(private db:AngularFireDatabase){

    }

    icones = [
        'logo-reddit',
        'cafe',
        'bug',
        'book',
        'bluetooth',
        'beer',
        'baseball',
        'at',
        'appstore',
        'logo-python'
    ];

    salas = [
        {
            id: '0',
            nome: 'Cinema',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT',
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        },
        {
            id: '1',
            nome: 'Curiosidades',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT',
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        },
        {
            id: '2',
            nome: 'Esportes',
            mensagens: [{
                usuario: {
                    icone: 'ionic',
                    nome: 'BOT'
                },
                texto: 'Bem-vindo a sala'
            }],
            usuarios: []
        }
    ];

    nomeNaSala(nome, sala) {
        let a = this.salas[sala.id].usuarios.some(e => e.nome == nome);
        console.log(a)
        return a;
    }

    addMensagem(usuario, texto, sala){
        this.db.list("/salas/" + sala.$key + "/mensagens/").push({
            usuario: usuario,
            texto: texto
        });
    }

    addUsuario(usuario, sala){
        this.db.list("/salas/" + sala.$key + "/usuarios/").push(usuario);
    }

    listarMensagens (){
        return this.db.list ("/mensagens/");
    }
}