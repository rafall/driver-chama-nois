import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.css']
})
export class RegisterSecondComponent implements OnInit {
  form = new FormGroup({
    cnh: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    registrationPlate: new FormControl(''),
  });

  constructor(
    private registerService: RegisterService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  registerDriver() {
    const carData = this.form.value;
    const data = this.registerService.getStoredData();
    data.cnh = carData.cnh + '';
    delete carData.cnh;
    data.car = carData;
    data.photoUrl = '';
    this.registerService.registerDriver(data).subscribe(res => {
      this.router.navigateByUrl('/login');
    });
  }

}
