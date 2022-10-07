import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {addDoc,Firestore,collection,getDocs, deleteDoc, doc} from '@angular/fire/firestore';

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

deleteProduct(product:any){
  console.log(product.id,"idd")
 //return this.afs.collection('/products').doc(productId).delete()
return this.afs.doc('/products/'+product.id).delete();

}

updateProduct(){

}

getData() {
  return this.afs.collection('/products').snapshotChanges();

}


}
//return this.http.get<Fruits[]>(`${this.baseUrl}`);
