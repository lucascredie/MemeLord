import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { MemeService } from '../../services/meme.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: string;
  percent: number = 83;
  userMemes: any[];
  user: User = {
    $id: "",
    uname: "",
    email: "",
    bio: "",
    profilePic: ""
  }

  constructor( private userservice: UserService, private router: Router, private route: ActivatedRoute, private memeserve: MemeService) {
    this.userMemes = [];
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.userservice.getUserDoc(this.userId).subscribe(myUser => {
      this.user = myUser;
      console.log(this.user);
      for ( let meme of this.user.memes) {
        this.memeserve.getMemesById(meme).subscribe(meme => {
          this.userMemes.push(meme);
        })
      }
    });

  }

}
