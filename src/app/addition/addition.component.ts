import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  hero = {
    name: '',
    power: '',
    image: ''

  };

  // heros : any[] = [];

  ajout() {
    // this.heros.push(this.hero)
    this._shared.heros.push(this.hero);
    this.hero = {
      name: '',
      power: '',
      image: ''
  
    }
    // console.log(this.hero); => check your work befor execute 
  }

  constructor(public _shared: SharedService) {  }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
    };


}
