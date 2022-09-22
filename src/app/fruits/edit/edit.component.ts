import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  fruitForm:Fruits = {
    id: 0,
    Name:'',
    Price: 0,
    Quantity: 0,
    irl:''
  };

  constructor(private route: ActivatedRoute,
    private router:Router,
    private fruitService: FruitsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
       this.getById(id)
    })


  }

  getById(id:number){
    this.fruitService.getById(id).subscribe((data)=>{
      console.log(data,'data id')
      this.fruitForm=data;

    })
  }

  update(){
    this.fruitService.update(this.fruitForm).subscribe(({
      next:(data)=>{
        this.router.navigate(['/fruits/home'])
      },
      error:(err) => {
        console.log(err);
      }
    }))
  }

}
