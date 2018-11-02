import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  list: any[];
  public selectInput: {[key: string]: any} = {
    'bindValue': 'desc',
    'bindLabel': 'id',
    'items': [{'id':'1', 'desc':'ONE'},{'id':'2', 'desc':'TWO'}, {'id':'3', 'desc':'THREE'}],
    'selectTitle': "Location name"
  };
 
  public multiSelectInput: {[key: string]: any} = {
    'bindValue': 'id',
    'bindLabel': 'desc',
    'items': [{'id':'1', 'desc':'one'},{'id':'2', 'desc':'two'}, {'id':'3', 'desc':'three'}],
    'selectTitle': "Location name"
  };

  constructor() { }

  ngOnInit() {}

}
