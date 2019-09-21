import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service' ;

declare var $: any ;
import 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _UsersService: UsersService) {

    _UsersService.getNews(this.currentCode).subscribe( data => { this.newsContainer = data.articles;

    } );

  }

  term = '' ;

  countries: object[] =
  [
    {name: 'Egypt'  ,  code: 'eg' },
    {name: 'France' ,  code: 'fr' },
    {name: 'Italy'  ,  code: 'it' },
    {name: 'Spain'  ,  code: 'si' },
    {name: 'Canada' ,  code: 'ca' }

  ] ;

  currentCode = 'eg';


  newsContainer: any[] = [];

  changeCode(u) {

    this.currentCode = u;

    this._UsersService.getNews(this.currentCode).subscribe( data => { this.newsContainer = data.articles;

    } );
  }


  ngOnInit() {



  }

}
