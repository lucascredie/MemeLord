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
  email: string;
  profile: string;
  profilePic?: string;
  memes?: string[];
  bio?: string;
  constructor(private uservice: UserService) { }

  ngOnInit() {
  }

  submitUser({value, valid}: {value: User, valid: boolean}) {
    if(valid) {
      this.uservice.addUser(value).then(suc => {

      })
      .catch(error => {
        console.log('There was an error creating the user: ', error);
      });

    } else {
      console.log('User submit form was invalid');
    }
  }

}
