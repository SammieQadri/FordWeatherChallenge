import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detWeather: any;
  chiWeather: any;
  seatWeather: any;
  nyWeather: any;

  constructor(
    private modalService: NgbModal,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    // Detroit: 4990729
    const det = 4990729;
    // Chicago: 4887398
    const chi = 4887398;
    // Seattle: 5809844
    const seat = 5809844;
    // New York: 5128581
    const ny = 5128581;
    this.weatherService.getWeather(det).subscribe(
      response => {
        console.log(response);
        this.detWeather = JSON.parse(JSON.stringify(response));
        console.log(this.detWeather.main.temp);
      }
    );

    this.weatherService.getWeather(chi).subscribe(
      response => {
        console.log(response);
        this.chiWeather = JSON.parse(JSON.stringify(response));
        console.log(this.chiWeather.main.temp);
      }
    );

    this.weatherService.getWeather(seat).subscribe(
      response => {
        console.log(response);
        this.seatWeather = JSON.parse(JSON.stringify(response));
        console.log(this.seatWeather.main.temp);
      }
    );

    this.weatherService.getWeather(ny).subscribe(
      response => {
        console.log(response);
        this.nyWeather = JSON.parse(JSON.stringify(response));
        console.log(this.nyWeather.main.temp);
      }
    );
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
