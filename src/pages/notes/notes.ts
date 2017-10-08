import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaComprasPage } from '../lista-compras/lista-compras';
import { ProductProvider } from '../../providers/product/product'
import { ComprasUrgentesPage } from '../compras-urgentes/compras-urgentes';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  products: any[] = [];
  urgent: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider) {
  }

  ionViewDidEnter() {
    this.getAllProducts();
    this.getAllUrgent();
  }

  getAllProducts() {
    this.productProvider.getAll(false)
      .then((result: any) => {
        this.products = result;
      });
  }

  getAllUrgent() {
    this.productProvider.getAll(true)
      .then((result: any) => {
        this.urgent = result;
      })
  }

  showNotas(){
  	//this.navCtrl.push(NotasPage);
  }

  showListaUrgentes(){
    this.navCtrl.push(ComprasUrgentesPage);
  }

  showListaCompras(){
  	this.navCtrl.push(ListaComprasPage);
  }

}
