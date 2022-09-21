import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: any;
  submitted: boolean=false;

  constructor(private fruitService: FruitsService , private router:Router,private fb:FormBuilder ,private toast: ToastrService ) { }

  // fruitForm:Fruits={
  //   id: 0,
  //   Name: "",
  //   Quantity:0,
  //   Price:0

  // }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      Name: ['', Validators.required],
      Price: ['', Validators.required],
      Quantity: ['', Validators.required,],
      irl:['',Validators.required]

  },

)
  }

  create(){
    this.submitted = true;
    if(this.createForm.invalid){
      return;
    }
    // this.fruitService.create(this.createForm).subscribe(({
    //   next:(data)=>{
    //     this.router.navigate(['/fruits/home'])},
    //     error:(err)=>{
    //           console.log(err)
    //     }
    // }))
    this.fruitService.create(this.createForm.getRawValue()).subscribe((res)=>{
      console.log(res,'post response')

      this.toast.show('Saved Successfully');
      this.router.navigate(['/fruits/home']);
    })
  }
  get f() { return this.createForm.controls; }


}
