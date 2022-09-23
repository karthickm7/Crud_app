import { Component, OnInit, TemplateRef } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { CartService } from 'src/app/service/cart.service';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allFruits: any = [];
  deleteModal: any;
  valueTodelete: any;
  filterTerm: string = '';
  showTable: boolean = false;

  constructor(private fruitService: FruitsService,private cartService:CartService, public modalservice:BsModalService, public modalRef: BsModalRef) {}

  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
    //localStorage.removeItem('SeesionUser')
if(this.allFruits == 0){

    this.showTable= true
}
 else{
  this.showTable =false
}

  }


  get() {
    this.fruitService.get().subscribe((data) => {
      this.allFruits = data;
    });
  }

  openDeleteModal(values: any) {
    this.valueTodelete = values;
    this.deleteModal.show();
  }

  delete() {
    this.fruitService.deleteData(this.valueTodelete).subscribe((res) => {
      console.log(res, 'delete res');
      this.deleteModal.hide();
      this.get();
    });
  }

  // addToCart(product:Fruits){
  //   console.log(product,"productsss")
  //     this.fruitService.addToCart(product)
  // }

  addToCart(product: Fruits) {

    

    this.cartService.addToCart(product);

  }

  discardAll(){

    this.modalservice.hide();
  }

  itemCount(){
    return this.cartService.itemsCount();
  }

}
