import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

}
