
import { Component, Input, OnInit, Type } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpProviderService } from '../service/http-provider.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  episodeList: any = [];
  constructor(private router: Router, private httpProvider : HttpProviderService) { }

  addEpisode(){
    console.log('Episode added');
  }
  ngOnInit(): void {
    this.getAllEpisodes();
  }
  async getAllEpisodes() {
    this.httpProvider.getAllEpisodes().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.episodeList = resultData.results;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.episodeList = [];
            }
          }
        }
      });
  }
 
}