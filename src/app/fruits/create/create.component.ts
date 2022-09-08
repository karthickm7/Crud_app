import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private fruitService: FruitsService , private router:Router) { }

  fruitForm:Fruits={
    id: 0,
    Name: "",
    Quantity:0,
    Price:0

  }

  ngOnInit(): void {
  }

  create(){
    this.fruitService.create(this.fruitForm).subscribe(({
      next:(data)=>{
        this.router.navigate(['/fruits/home'])},
        error:(err)=>{
              console.log(err)
        }
    }))
  }

}
