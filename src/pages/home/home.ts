import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
inmuebles=[];
  constructor(public navCtrl: NavController,
              public http: HttpClient) {
    this.http.get('/v1/api/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)')
    .subscribe(data => {
     //console.log(JSON.stringify(data,null,3));
      if(data.hasOwnProperty('ads'))
      {
        this.inmuebles = data['ads'];
      }
    },
    error => {
    //console.log(JSON.stringify(error));
      });

  }

}
