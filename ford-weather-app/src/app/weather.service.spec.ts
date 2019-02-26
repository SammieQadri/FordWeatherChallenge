import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing' ;

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it('should give 400 error', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    let error;
    service.getWeather(0).subscribe(
      response => {
      }, (err) => {
        error = (JSON.parse(JSON.stringify(err)));
        expect(error.status).toEqual(400);
      }
    );
  });

  it('should give 401 error', () => {
    const det = 4990729;
    const service: WeatherService = TestBed.get(WeatherService);
    let error;
    service.getForecast(det).subscribe(
      response => {
      }, (err) => {
        error = (JSON.parse(JSON.stringify(err)));
        expect(error.status).toEqual(401);
      }
    );
  });

  it('should pull data for Detroit', () => {
    const det = 4990729;
    const service: WeatherService = TestBed.get(WeatherService);
    let resp;
    service.getWeather(det).subscribe(
      response => {
        resp = (JSON.parse(JSON.stringify(response)));
        expect(resp.name).toEqual('Detroit');
      }, (err) => {
      }
    );
  });


});
