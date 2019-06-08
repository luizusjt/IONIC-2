import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalaService } from './sala.service';

export const firebaseConfig = {
  apiKey: "AIzaSyAeqJckRkEciLiJAvydccAS6gC275UkS04",
  authDomain: "chat-ionic-6bc63.firebaseapp.com",
  databaseURL: "https://chat-ionic-6bc63.firebaseio.com",
  projectId: "chat-ionic-6bc63",
  storageBucket: "chat-ionic-6bc63.appspot.com",
  messagingSenderId: "387842769771",
  appId: "1:387842769771:web:e53dc2ab4960e23f"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SalaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
