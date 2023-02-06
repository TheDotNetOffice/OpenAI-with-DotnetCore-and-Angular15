import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{catchError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {

  constructor(private client : HttpClient) { }

  getData(input :string) : Observable<any>
  {
    return this.client.get('https://localhost:7285/api/OpenAI/GetData?input='+input,{responseType:'text'});

  } 
}
