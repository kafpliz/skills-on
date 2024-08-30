import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { regData } from '../../interface/allInterface';
import { regPost } from '../../allUtils/axios';
import axios from "axios";


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  value: boolean = true;
  isValidate: boolean = true
  regProgress: { first: boolean, second: boolean, third: boolean, } = {
    first: true,
    second: false,
    third: false,
  }
  regData: regData = {
    firstname: '',
    lastName: '',
    email: '',
    password: '',
    confirmationPassword: ''
  }
  emailCode: string = ''
  steps: { first: boolean, second: boolean, third: boolean } = {
    first: true,
    second: false,
    third: false
  }
 async enterCode() {
    if (this.regData.firstname && this.regData.lastName && this.regData.email && this.regData.password && this.regData.confirmationPassword) {
      console.log(this.regData.firstname);
      let data = {
        email: this.regData.email,
        first_name: this.regData.firstname,
        last_name:this.regData.lastName ,
        password: this.regData.password
      }
      await axios.post('http://31.128.42.26/auth/registration/user-data/', data).then(data=> {
        console.log(data);
        
      })
     /*    await regPost('user-data', data).then(data => {
          console.log(data);
          
        }) */
      
/*       this.steps.first = false;
        this.steps.second = true;
        this.regProgress.second = true;
 */
      } else {

        this.isValidate = false

      }



    }
    sendCode() {
      if (!this.emailCode) { return }
      this.steps.second = false;
      this.steps.third = true;
      this.regProgress.third = true;
    }

    getProgressClasses() {
      return {
        'progress-first': this.regProgress.first,
        'progress-second': this.regProgress.second,
        'progress-third': this.regProgress.third
      }
    }
  }
