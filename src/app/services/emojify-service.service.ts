import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmojifyServiceService {
  private baseUrl = "https://emojifiereu.herokuapp.com/encode"
  
  constructor(private http: HttpClient) { 

  }
  emojifyUrl(input: String) : String {
    this.http.post<String>(this.baseUrl, input).subscribe(response => {
      console.log(response)
    })

    return ''
  }
}
