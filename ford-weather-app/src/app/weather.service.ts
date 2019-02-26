import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  apiKey = 'dae66f21cfc7f62fc5e09716e679ab5a';
  url = 'https://api.openweathermap.org/data/2.5/weather?appid=' + this.apiKey + '&units=metric&id=';
  url2 = 'https://api.openweathermap.org/data/2.5/forecast/daily?&id=';
  url22 = '&cnt=10&units=metric&appid=' + this.apiKey;
  resp;
  cityName;
  constructor(public http: HttpClient) { }

  // Detroit: 4990729
  // Chicago: 4887398
  // Seattle: 5809844
  // New York: 5128581

  getWeather(cityId: number) { // Observable<object> {
    this.resp = this.http.get(`${this.url}${cityId}`);
    this.cityName = JSON.parse(JSON.stringify(this.resp));
    this.cityName = this.cityName.name;
    return this.resp;
  }

  getForecast(cityId: number) {
    return this.http.get(`${this.url2}${cityId}${this.url22}`);
  }

}
