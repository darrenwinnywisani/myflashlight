import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
isOn:boolean
status:string;
  constructor(public navCtrl: NavController, private platform:Platform,private flash:Flashlight) {
this.platform.ready().then(()=>{
  this.updateflashlight()
})
  }
  switchon():void{
    this.flash.switchOn();
    this.updateflashlight()
  }
  switchoff():void{
    this.flash.switchOff();
    this.updateflashlight()
  }

  toggle():void{
    this.flash.toggle();
    this.updateflashlight()
    
  }
  updateflashlight(){
    this.isOn= this.flash.isSwitchedOn();
  }

}
