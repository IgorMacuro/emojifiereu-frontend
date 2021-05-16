import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmojifyServiceService } from '../services/emojify-service.service';



@Component({
  selector: 'app-emojify',
  templateUrl: './emojify.component.html',
  styleUrls: ['./emojify.component.scss'],
  providers: [EmojifyServiceService]
})


export class EmojifyComponent implements OnInit {
 
  form: FormGroup
  emojifiedUrl: string
  hrefString: string

  constructor(private emojifyService: EmojifyServiceService) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      userInput: new FormControl('',[
        Validators.required
      ])
    });
  }

  submit() {
    const formData = {...this.form.value}
    this.emojifyService.emojifyUrl(formData.userInput).subscribe(data => {
      this.emojifiedUrl = data.encodedUrl;
      this.hrefString = `<a href='https://emojifiereu.herokuapp.com/${this.emojifiedUrl}'>${this.emojifiedUrl}</a>`
    })
  }

}
