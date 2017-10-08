import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Paho} from 'ng2-mqtt/mqttws31';

@Injectable()
export class MqttProvider {
	connected: boolean = false;
	client;

  constructor(public http: Http) {
  }

  connect(id){
  	//this.client = new Paho.MQTT.Client('m20.cloudmqtt.com', 33504, id );
    this.client = new Paho.MQTT.Client("192.168.1.6", 11883, id);
    var options = {
      //useSSL: true,
      //userName: "hardtek",
      //password: "hardtek",
      onSuccess:this.onConnected.bind(this),
      onFailure:this.onFailure.bind(this)
    }

    // connect the client
    this.client.connect(options);
    //this.client.connect( {onSuccess: this.onConnected.bind(this), userName:'wpyxibcf', password:'ednAC25T4bVd'});
  }
  onConnected() {
    this.connected = true;
    console.log("Connected to mqtt broker");
    this.client.subscribe("hardtek/quarto/ceiling/logs");
    this.client.subscribe("hardtek/quarto/ceiling");
  }

  sendMessage(message: string, topic: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = topic;
    this.client.send(packet);
  }

  onMessage(callback) {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
    	if (message.destinationName == 'hardtek/quarto/ceiling/logs') {
    		if (message.payloadString == 'L') {
    			callback('ceiling','L');
    		}
    		else{
    			callback('ceiling','D');
    		}
    	}
    };

  }

  onConnectionLost() {   
    this.client.onConnectionLost = (responseObject: Object) => {
      this.connected = false;
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }

  //*****************

  sendToQuartoAll(x) {
  	let topic = 'hardtek/quarto/all';
  	if(x){
  		this.sendMessage('L', topic);
  	} else {
  		this.sendMessage('D', topic);
  	}
  }

  checkConnection(callback){
    callback(this.connected);
  }

  onFailure(){

  }

}
