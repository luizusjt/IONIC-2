import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { text } from '@angular/core/src/render3/instructions';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  sala;
  usuario; 
  texto:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.sala = this.navParams.get("salaParam");
    this.usuario = this.navParams.get("usuarioParam");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    console.log(this.sala)
  }

  ionViewWillLeave(){
    const index = this.sala.usuarios.indexOf(this.usuario, 0);
    this.sala.usuarios.splice(index, 1);
  }

  enviarMensagem(usuario, texto){
    this.sala.mensagens.push({
      usuario: usuario,
      texto: texto
    })
    this.db.list("/mensagens/").push({
      usuario: usuario,
      texto: texto
    })
    this.texto=null;
  }
}
