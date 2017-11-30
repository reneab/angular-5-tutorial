import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  titleSize: number;
  isColored: boolean;
  name: string;
  email: string;
  age: number;
  adress: Adress;
  hobbies: string[];
  editing: boolean;
  country: string;
  countries: string[];
  dateOfBirth: Date = new Date(1988, 11, 7);
  savings: number;
  familyName = 'abdallah';
  weight: number;
  size: number;

  constructor() {
    console.log('launched constructor');
    this.name = 'John Doe'; // notice that it will be override in ngOnInit()
    this.editing = false;
    this.isColored = false;
    this.titleSize = 24;
  }

  ngOnInit() {
    console.log('launched ngOnInit');
    this.name = 'Rene';
    this.email = 'rene.abd@gmail.com';
    this.age = 28;
    this.adress = {
      street: 'Nasipit Road',
      city: 'Cebu'
    };
    this.hobbies = ['basketball', 'music', 'chill'];
    this.countries = ['Lebanon', 'USA', 'Philippines'];
    this.country = this.countries[0];
    this.savings = 50;
    this.weight = 70;
    this.size = 175;
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
  street: string;
  city: string;
}
