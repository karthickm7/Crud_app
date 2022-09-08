import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruits } from './fruits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http: HttpClient) { }

  get():Observable<Fruits[]>{
    return this.http.get<Fruits[]>('http://localhost:3004/fruits');
  }

  create(Payload:Fruits):Observable<Fruits>{
    return this.http.post<Fruits>('http://localhost:3004/fruits',Payload);
  }

  getById(id:number):Observable<Fruits>{
    return this.http.get<Fruits>(`http://localhost:3004/fruits/${id}`);
  }

  update(Payload:Fruits):Observable<Fruits>{
    return this.http.put<Fruits>(`http://localhost:3004/fruits/${Payload.id}`,Payload);
  }

  delete(id:number){
    console.log(id,"deleted data api")
    return this.http.delete<Fruits>(`http://localhost:3000/fruits/${id}`);
 }


}
