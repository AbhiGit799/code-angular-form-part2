import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  regForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    // this.regForm=new FormGroup({

    //   id:new FormControl(),
    //   fname:new FormControl(),
    //   lname:new FormControl(),
    //   email:new FormControl(),
    //   mobileno:new FormControl(),

    // });

    //Removing new keyword 17/04/2023

    // this.regForm = this._fb.group({

    //   id:new FormControl(),
    //   fname:new FormControl(),
    //   lname:new FormControl(),
    //   email:new FormControl(),
    //   mobileno:new FormControl(),

    // });

    //setting default value.
    // this.regForm = this._fb.group({

    //   id:new FormControl(),
    //   fname:new FormControl("Aman"),
    //   lname:new FormControl(),
    //   email:new FormControl(),
    //   mobileno:new FormControl(7894561230),

    // });

    //setting default value.
    // this.regForm = this._fb.group({

    //   id:[0],
    //   fname:[''],
    //   lname:[''],
    //   email:[''],
    //   mobileno:[''],

    // });

    //Putting validation , 2nd parameter hota hai
    // this.regForm = this._fb.group({

    //   id:[0],
    //   fname:['',Validators.required],
    //   lname:['',Validators.required],
    //   email:['',Validators.required],
    //   mobileno:['',Validators.required],

    // });

    // Putting Multiple validation
    // this.regForm = this._fb.group({

    //   id:[0],
    //   fname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    //   lname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    //   email:['',[Validators.required,Validators.email]],
    //   mobileno:['',Validators.required],

    // });

    //compose for validations
    this.regForm = this._fb.group({
      id: [0],
      fname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
      lname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobileno: ['', Validators.required],
    });


    //ValueChange {Topic} //<==================================================================

    // this.regForm.get('fname').valueChanges.subscribe(firstname=>{
    //   console.log("Fname change = "+firstname);
    // })

    // this.regForm.valueChanges.subscribe(formdata=>{
    //   console.log("fname changed = "+formdata.fname),
    //   console.log("lname changed = "+formdata.lname)
    // })

    //Status change {Topic} //<==================================================================

    // this.regForm.get('fname').statusChanges.subscribe(firstNameStatus=>{
    //   console.log("fname status  = "+firstNameStatus)
    // })


    // this.regForm.statusChanges.subscribe(formdata=>{
    //   console.log("Formvalidation status = "+formdata)
    // })

    //FormArray //<===============================================================================

    // let arr = new FormArray([
    //   new FormControl(),
    //   new FormControl()
    // ])

    // console.log(arr.value);

    let arr = new FormArray([
      new FormControl('Kamal'),
      new FormControl('',Validators.required)
    ])

    console.log(arr.value);
    console.log(arr.valid);

    arr.reset();

    console.log(arr.value);
    console.log(arr.valid);

  }

  register(formdata: FormGroup) {
    // console.log(formdata.value);
    // console.log(this.regForm); //using direct variable that we used in ts file.
    console.log(formdata.value);

    //Get and reset value
    //  console.log(this.regForm.get('fname').value);
    //  console.log(this.regForm.get('lname').value);
    //  console.log(this.regForm.get('email').value);
    //  console.log(this.regForm.get('mobileno').value);
  }

  //Reset value
  resetpartial() {

    //  this.regForm.reset();  //To reset all the form control value.

    // this.regForm.reset({  //Partial reset
    //   fname:'Mr.'
    // });

    //To retain fname and email
    this.regForm.reset({
      fname:this.regForm.get('fname').value,
      email:this.regForm.get('email').value
    });

  }


  resetAll() {

    this.regForm.reset();  //To reset all the form control value.

  }

  resettit()
  {
      this.regForm.reset({  //Partial reset
      fname:'Mr.'
    });
  }


  //set value and patch value

  filldatapatch() {

    this.regForm.patchValue({
      //all form fields are mandatory for setValue.
      id: 101,
      email: 'c@gmail.com',
      mobileno: '8588805737',
    });

  }


  filldataset()
  {
       //all form fields are mandatory for setValue.
    this.regForm.setValue({
      
      id: 102,
      fname: 'Aman',
      lname: 'Singh',
      email: 'a@gmail.com',
      mobileno: '1234567890',
    });

  }



} //class end {}

