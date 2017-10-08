import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ProductProvider, Product } from '../../providers/product/product'
import { EditProductPage } from '../edit-product/edit-product';


@Component({
  selector: 'page-compras-urgentes',
  templateUrl: 'compras-urgentes.html',
})
export class ComprasUrgentesPage {

  products: any[] = [];
  searchText: string = null;
 
  constructor(public navCtrl: NavController, private toast: ToastController, private productProvider: ProductProvider) { }
 
  ionViewDidEnter() {
    this.getAllUrgent();
  }

  getAllUrgent(){
    this.productProvider.getAll(true, this.searchText)
      .then((result: any) => {
        this.products = result;
      });
  }
 
  addProduct() {
    this.navCtrl.push(EditProductPage);
  }
 
  editProduct(id: number) {
    this.navCtrl.push(EditProductPage, { id: id });
  }
 
  removeProduct(product: Product) {
    this.productProvider.remove(product.id)
      .then(() => {
        // Removendo do array de produtos
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
        this.toast.create({ message: 'Produto removido.', duration: 2000, position: 'botton' }).present();
      })
  }
 
  filterProducts(ev: any) {
    this.getAllUrgent();
  }

}
