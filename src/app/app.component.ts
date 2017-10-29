import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  heroes: any;

  constructor(private http: Http) { }

  ngOnInit() {
    const marvelPublicApiKey = 'e7c7a8f3d7d409ade75377d62de644ed';
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&apikey=${marvelPublicApiKey}`;
    const httpObservable = this.http.get(url);
    httpObservable.subscribe(
      (response) => {
        const datos = response.json();
        console.log(datos.data.results);
        this.heroes = datos.data.results;
      }
    );
  }
}
