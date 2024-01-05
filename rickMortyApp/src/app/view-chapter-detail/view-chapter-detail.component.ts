import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpProviderService } from '../service/http-provider.service';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-chapter-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-chapter-detail.component.html',
  styleUrl: './view-chapter-detail.component.scss'
})

export class ViewChapterDetailComponent implements OnInit {
    episodeDetailsForm: episodeDetails = new episodeDetails();
  
    @ViewChild("employeeForm")
    episodeDetails!: NgForm;
  

    employeeId: any;
  
    constructor(private router: Router, private httpProvider : HttpProviderService, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.employeeId = this.route.snapshot.params['episodeId'];
      this.getEmployeeDetailById();

      console.log(this.route.snapshot.params)
    }
    getEmployeeDetailById() {
      this.httpProvider.getEpisodeById(this.employeeId).subscribe((data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.episodeDetailsForm.Id = resultData.id;
            this.episodeDetailsForm.Name = resultData.name;
            this.episodeDetailsForm.Episode = resultData.episode;
            this.episodeDetailsForm.AirDate = resultData.air_date;
          }
        }
      },
        (error: any) => { });
    }  
}

export class episodeDetails {
  Id: number = 0;
  Name: string = "";
  Episode: string = "";
  AirDate: string = "";
}
