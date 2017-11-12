import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  age: number;
  adress: Adress;
  hobbies: string[];
  editing: boolean;

  constructor() { 
    console.log('launched constructor');
    this.name = 'John Doe';
    this.editing = false;
  }

  ngOnInit() {
    console.log('launched ngOnInit');
    this.name = 'Rene';
    this.email = 'rene.abd@gmail.com';
    this.age = 28;
    this.adress = {
      street: 'Nasipit Road',
      city: 'Cebu'
    }    
    this.hobbies = ['basketball', 'music', 'chill'];
  }

  addHobby(hobby: string) {
    this.hobbies.unshift(hobby);
    return false;  
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }

  increaseAge() {
    this.age++;
  }

  decreaseAge() {
    this.age--;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }
}

interface Adress {
  street: string,
  city: string
}
