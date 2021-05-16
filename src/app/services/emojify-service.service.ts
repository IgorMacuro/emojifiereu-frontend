import { Url } from './../interfaces/Url';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmojifyServiceService {
  private baseUrl = "https://emojifiereu.herokuapp.com/encode/"
  emojifiedUrl = ''
  constructor(private http: HttpClient) { 

  }
  emojifyUrl(input: String) : Observable<Url> {
    //change to base64
    return this.http.get<Url>(`${this.baseUrl}${input}`)
    }
  }

