import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  hero = {
    name: '',
    power: '',
    image: ''

  }

  heros : any[] = [];

  ajout() {
    this.heros.push(this.hero);
    this.hero = {
      name: '',
      power: '',
      image: ''
  
    }
    // console.log(this.hero); => check your work befor execute 
  }

}
