import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {

  heros=[{"id":1,"name":"John","power":2612},
  {"id":2,"name":"Steven","power":3211},
  {"id":3,"name":"March","power":5412},
  {"id":4,"name":"Hana","power":4412},
  {"id":5,"name":"Erik","power":3565}

  ];
  constructor() { }
  delete(heroObj){
    console.log(heroObj);
  }

  ngOnInit() {
  }

}
