import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Toast } from "@ionic-native/toast";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public platform: Platform,
    public toast: Toast,
    public navCtrl: NavController) {

  }

  showToast(){
    this.platform.ready()
    .then(()=>{
      this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
        res => console.log(res)
      )
    })
  }

}
