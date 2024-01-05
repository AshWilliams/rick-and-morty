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

  public getAllEpisodes(pageId: string): Observable<any> {
    return this.webApiService.get(httpLink.getAllEpisodes + '?page=' + pageId);
  }
  public getEpisodeById(episodeId: string): Observable<any> {
    return this.webApiService.get(httpLink.getEpisodeById + '/' + episodeId);
  }
 
}                          