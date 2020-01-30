import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class MovieService {
    url: string;
     key: string;
    language: string;
     region: string;
    API_KEY = 'a1a95fe87e44519a363a2dd27041d20f';
    constructor(private $http: HttpClient) {
        this.url = 'https://api.themoviedb.org/3/';
        this.key= 'a1a95fe87e44519a363a2dd27041d20f';
        this.language = 'en-US';
        this.region = 'US'
    }


    // public getMovies(){
    //     return this.$http.get(`https://api.themoviedb.org/3/movie/550?api_key=${this.API_KEY}`);
    //   }

      getPopular(page: number): Observable<any> {
        return this.$http.get(`${this.url}movie/popular?api_key=${this.key}&page=${page}&language=${this.language}&region=${this.region}`);
    }
   

 
}   