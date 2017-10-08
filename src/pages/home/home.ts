import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MqttProvider } from '../../providers/mqtt/mqtt';
import { WeatherProvider } from '../../providers/weather/weather';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	weather:any;

	switchCandeeiro;
	bulbColor: string = 'bright';
	online: string = 'bright';
	safeZone = true;

  constructor(
  	public navCtrl: NavController,
  	private mqttProvider: MqttProvider,
  	private weatherProvider: WeatherProvider,
  ) {
  	
  }

  ionViewDidLoad() {
  	this.loadData();
  }


  toggleCandeeiro(){
  	this.safeZone = false;
  	let message;
  	let topic = "hardtek/quarto/ceiling";
 	let x = this.switchCandeeiro;
  	if(x){
  		message = 'L';
  		this.bulbColor = 'primary';
  	}else{
  		message = 'D';
  		this.bulbColor = 'bright';
  	}
  	this.mqttProvider.sendMessage(message, topic);
  	setTimeout(()=>{this.safeZone = true}, 3000);
  }


  refresh(refresher){
  	this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 200);
  	
  }

  loadProfilePage(){
  	this.navCtrl.push('ProfilePage');
  }


  loadData(){
  	this.weatherProvider.getWeather().subscribe(weather => {
      this.weather = weather.weather;
    }, err => {
      console.log(err);
      return false;
    });
  	let id = Math.floor((Math.random() * 1000000) + 1);
  	this.mqttProvider.connect(id.toString());
  	this.mqttProvider.onMessage((topic, message)=>{
  		if(topic == 'ceiling'){
  			if(this.safeZone == true){
	  			if(message == 'L'){
	  				this.bulbColor = 'primary';
	  				this.switchCandeeiro = true;
            console.log('ligado');
	  			}else{
	  				this.bulbColor = 'bright';
	  				this.switchCandeeiro = false;
            console.log('desligado');
	  			}
  			}
  		}
  	});
    this.mqttProvider.onConnectionLost();
    this.mqttProvider.checkConnection((data)=>{
    	if(data == false){
		    this.online = 'danger';
    	}else{
    		this.online = 'secondary'
    	}
	});
  }

}
