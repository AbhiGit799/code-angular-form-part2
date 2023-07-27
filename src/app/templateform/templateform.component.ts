import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {

  constructor()
  {

  }

  register(regdata:NgForm)
  {
   console.log(regdata.value);
   console.log(regdata.valid);
  }

}
