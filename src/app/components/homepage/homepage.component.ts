import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Meme } from '../../models/Meme';
import { MemeService } from "../../services/meme.service";

import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from 'angularfire2/storage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  myMemes: Meme[];

  constructor(
    private memeService: MemeService
  ) { }

  ngOnInit() {

    this.memeService.getMemes().subscribe(memes => {
      this.myMemes = memes;
      console.log(this.myMemes);

      // this.getAllPictures();
    })
  }

}
