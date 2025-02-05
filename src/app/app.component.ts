import {Component, OnInit, CSP_NONCE} from '@angular/core';
import {LoadingService} from './loading/loading.service';
import {MessagesService} from './messages/messages.service';
import {AuthStore} from './services/auth.store';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    providers: [
      {
          provide: CSP_NONCE,
          useValue: 'randomNoncePlaceholder'
      },
  ],
})
export class AppComponent implements  OnInit {

    constructor(public auth: AuthStore) {

    }

    ngOnInit() {


    }

  logout() {
        this.auth.logout();

  }

}
