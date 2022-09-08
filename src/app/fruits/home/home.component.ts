import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
//import { ToasterService } from 'src/app/services/toaster.service';


declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allFruits: Fruits[] = []
  deleteModal: any;
  idTodelete: number=0;

  constructor(private fruitService: FruitsService,) { }

  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
       this.get();
  }
  get(){
    this.fruitService.get().subscribe((data)=>{
      this.allFruits = data;
    })

  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete(){
    this.fruitService.delete(this.idTodelete).subscribe({

      next:(data)=>{
        console.log(this.allFruits,'all fruitss'),
        this.allFruits.filter(val => val.id !== this.idTodelete)
        this.deleteModal.hide();

      }
    });
  }




}
