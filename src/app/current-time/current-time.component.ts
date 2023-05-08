import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css'],
})
export class CurrentTimeComponent implements OnInit {
  CurrentTime: any;

  constructor() {}

  ngOnInit(): void {
    this.CurrentTime = '';
  }
}

moment.locale('es');

const formato = 'dddd Do MMMM YYYY';

const hoy = moment();
const dieciochoanios = moment().subtract(18, 'years');
const dieciochoanios2 = hoy.clone().subtract(18, 'years');

console.table({
  hoy: hoy.format(formato),
  dieciochoanios: dieciochoanios.format(formato),
  dieciochoanios2: dieciochoanios.format(formato),
});
