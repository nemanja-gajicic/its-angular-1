import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  jsonIn = {
    name: '',
    ingredient: ''
  }
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
   
  }

  search(): void {

  }

}
