import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public url: string = 'https://randomuser.me/api/?results=50';
  constructor(
    private httpClient: HttpClient
  ) { }

  get apiListAllUser(): Observable<any> {
    return this.httpClient.get(this.url).pipe((res:any)=> res)
  }
}
