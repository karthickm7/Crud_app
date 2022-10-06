import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {addDoc,Firestore,collection,getDocs} from '@angular/fire/firestore';

import { Fruits } from '../fruits/fruits';

@Injectable({
  providedIn: 'root'
})
export class FiredataService  implements OnInit{
  product:any[];

  constructor(private fs: Firestore ,private afs : AngularFirestore) { }
  ngOnInit(): void {

  }


createData(Data:Fruits){
    console.log(Data,'dataaa')
    return this.afs.collection('/products').add(Data);
    // const dbInstance =collection(this.fs,'products');
    // addDoc(dbInstance,Data).then(()=>{
    //   alert('sent data')
    // }).catch((err)=>{
    //   alert(err)
    // })

}


// getData(){
//   const dbInstance =collection(this.fs,'products');
//   getDocs(dbInstance).then((res)=>{
//     return([...res.docs.map((item)=>{
//       return{...item.data()}
//     })])

//   })
// }

deleteProduct(product:Fruits){
  this.afs.doc('/products'+product.id).delete();
}

getData() {
  return this.afs.collection('/products').snapshotChanges();

}


}
//return this.http.get<Fruits[]>(`${this.baseUrl}`);
