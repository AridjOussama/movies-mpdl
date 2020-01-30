import { Component, OnInit } from '@angular/core';
import {MovieService} from '../service-movie/movie.service'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies:any;
  constructor(private movieService :MovieService) { }

  ngOnInit() {
    this.movieService.getPopular(1).subscribe((data)=>{
      console.log(data);
      this.movies = data.results;
      this.movies.forEach(np => np['isMovie'] = true);
    });
  }

}
