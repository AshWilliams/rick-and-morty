import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = 'https://rickandmortyapi.com/api/episode';

var httpLink = {
  getAllEpisodes: apiUrl,
  getEpisodeById: apiUrl,
}

@Injectable({
  providedIn: 'root'
})

export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllEpisodes(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEpisodes);
  }
  public getEpisodeById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEpisodeById + '/' + model);
  }
 
}                          