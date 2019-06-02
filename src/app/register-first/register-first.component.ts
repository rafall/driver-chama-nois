import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-first',
  templateUrl: './register-first.component.html',
  styleUrls: ['./register-first.component.css']
})
export class RegisterFirstComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    houseNumber: new FormControl(''),
    referencePoint: new FormControl(''),
    document: new FormControl(''),
  });

  constructor(
    private registerService: RegisterService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  registerDriver() {
    this.registerService.storeFirstStep(this.form.value);
    this.router.navigateByUrl('/register-second');

  }

}
