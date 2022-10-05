import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Fruits } from '../fruits/fruits';

@Injectable({
  providedIn: 'root'
})
export class FiredataService {

  constructor(private fs: AngularFirestore) { }


createData(Data:Fruits){
    console.log(Data,'dataaa')
    
}
}
