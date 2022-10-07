import { Component, OnInit } from '@angular/core';
import { FiredataService } from 'src/app/service/firedata.service';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { CreateComponent } from '../create/create.component';
import { Fruits } from '../fruits';

declare var window: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  allFruits: any[];
  deleteModal: any;
  window :any
  valueTodelete:any;
  message: string;
  constructor(private fireservice: FiredataService,private modalService: BsModalService,public bsModalRef: BsModalRef,) {}

  ngOnInit(): void {

    this.message='';
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }

  get() {
    this.fireservice.getData().subscribe((res) => {
      this.allFruits = res.map((items: any) => {
        const data = items.payload.doc.data();

        return data;
      });
      console.log(this.allFruits, 'fruitss');
    });
  }
  deleteProduct(fruits:Fruits){
    this.valueTodelete = fruits;
    this.deleteModal.show();

  }

  delete(){
    console.log(this.valueTodelete,"delete")
    this.fireservice.deleteProduct(this.valueTodelete)
    

  }

  openCreateModal(){
    console.log('inside create')
    this.bsModalRef = this.modalService.show(
      CreateComponent, {
      class: 'modal-xl custom-modal-content',
      ignoreBackdropClick: true,

    });
  }
}
