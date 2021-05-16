import { Component, OnInit } from '@angular/core';
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
  

  constructor(private emojifyService: EmojifyServiceService) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      userInput: new FormControl('',[
        Validators.required
      ])
    });
  }

  submit() {
    console.log(this.form)
    const formData = {...this.form.value}
    console.log(formData)
    this.emojifyService.emojifyUrl(formData.userInput)
  }

}
