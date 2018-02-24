import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enteredUname: string;
  enteredPassword: string;
  incorrectUser: boolean;
  incorrectPass: boolean;
  constructor(private userve: UserService, private router: Router) {
    this.enteredUname = '';
    this.enteredPassword = '';
    this.incorrectUser = false;
    this.incorrectPass = false;
  }

  ngOnInit() {
  }

  userAuth() {
    this.userve.getUser(this.enteredUname).subscribe(user => {
      if (user) {
        if (this.enteredPassword === user[0].password) {
          this.router.navigate(['/user/{{ user[0].id }}']);
        } else {
          this.incorrectPass = true;
        }
      } else {
        this.incorrectUser = true;
      }
    });
  }

}
