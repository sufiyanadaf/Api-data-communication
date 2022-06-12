import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpclient: HttpClient) { }

  sendInformation(){
    let url = 'https://reqres.in/api/users?page=2';
    return this.httpclient.get(url)
  }
}

