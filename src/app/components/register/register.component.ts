import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('newUserForm') form: any;
  $id: string;
  uname: string;
  password: string;
  confirmPassword: string;
  email: string;
  profile: string;
  profilePic?: string;
  memes?: string[];
  bio?: string;
  passNoMatch: boolean;
  constructor(private uservice: UserService) {
    this.passNoMatch = false;
   }

  ngOnInit() {
  }

  submitUser({value, valid}: {value: User, valid: boolean}) {
    if(valid) {
      if(value.password === this.confirmPassword) {
        let temp = {
          uname: value.uname,
          password: value.password,
          email: value.email
        }
        this.uservice.addUser(temp);
        this.form.resetForm();
      } else {
        this.passNoMatch = true;
      }
    } else {
      console.log('User submit form was invalid');
    }
  }

}
