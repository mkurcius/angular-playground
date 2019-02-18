import { Component, OnInit } from '@angular/core';
import { DATA_SOURCE, PeriodicElement } from './data-source';

@Component({
  selector: 'mct-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor() { }

  readonly dataSource = DATA_SOURCE;
  readonly displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];

  ngOnInit() {
  }

  handleAction1(element: PeriodicElement) {
    console.log('action 1', element);
  }

  handleAction2(element: PeriodicElement) {
    console.log('action 2', element);
  }

  handleAction3(element: PeriodicElement) {
    console.log('action 3', element);
  }
}
